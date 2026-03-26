#!/usr/bin/env python3
"""
render.py - Render content.md to index.html.

Architecture:
- template.html: HTML skeleton and placeholders
- styles.css: page styles, with __PYGMENTS_CSS__ placeholder
- app.js: page interactions
"""

from pathlib import Path
import re

import markdown
from pygments.formatters import HtmlFormatter

BASE_DIR = Path(__file__).resolve().parent
CONTENT_PATH = BASE_DIR / "content.md"
TEMPLATE_PATH = BASE_DIR / "template.html"
CSS_PATH = BASE_DIR / "styles.css"
JS_PATH = BASE_DIR / "app.js"
OUTPUT_PATH = BASE_DIR / "index.html"


# 1) Read source Markdown
source = CONTENT_PATH.read_text(encoding="utf-8")

# 2) Pre-process: protect Mermaid fences from Pygments
mermaid_blocks: list[str] = []


def _save_mermaid(match: re.Match) -> str:
    mermaid_blocks.append(match.group(1).strip())
    return f"\n\nMERMAID_PLACEHOLDER_{len(mermaid_blocks) - 1}\n\n"


source = re.sub(r"```mermaid\r?\n(.*?)```", _save_mermaid, source, flags=re.DOTALL)

# 3) Convert Markdown -> HTML
md = markdown.Markdown(
    extensions=["extra", "codehilite", "toc", "sane_lists"],
    extension_configs={
        "codehilite": {"css_class": "highlight", "guess_lang": False, "use_pygments": True},
        "toc": {"title": "目錄", "toc_depth": 3},
    },
)
body_html = md.convert(source)

# 3b) Post-process: render task-list checkboxes
body_html = re.sub(r"<li>\[x\]", '<li><input type="checkbox" checked disabled>', body_html)
body_html = re.sub(r"<li>\[ \]", '<li><input type="checkbox" disabled>', body_html)
body_html = re.sub(r"<li>\s*<p>\[x\]", '<li><p><input type="checkbox" checked disabled>', body_html)
body_html = re.sub(r"<li>\s*<p>\[ \]", '<li><p><input type="checkbox" disabled>', body_html)

# 4) Restore Mermaid blocks
for i, diagram in enumerate(mermaid_blocks):
    body_html = body_html.replace(
        f"<p>MERMAID_PLACEHOLDER_{i}</p>",
        f'<div class="mermaid-wrap"><div class="mermaid">{diagram}</div></div>',
    )

# 5) Build dynamic Pygments CSS
try:
    pygments_css = HtmlFormatter(style="one-dark").get_style_defs(".highlight")
except Exception:
    pygments_css = HtmlFormatter(style="monokai").get_style_defs(".highlight")

# 6) Compose final HTML from template + css + js
template_html = TEMPLATE_PATH.read_text(encoding="utf-8")
css_text = CSS_PATH.read_text(encoding="utf-8").replace("__PYGMENTS_CSS__", pygments_css)
js_text = JS_PATH.read_text(encoding="utf-8")

html_output = (
    template_html.replace("/*__CSS_CONTENT__*/", css_text)
    .replace("<!--__BODY_HTML__-->", body_html)
    .replace("/*__JS_CONTENT__*/", js_text)
)

# 7) Write output
OUTPUT_PATH.write_text(html_output, encoding="utf-8")
print(f"Successfully rendered -> {OUTPUT_PATH.name}")
