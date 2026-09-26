"""Generate the shareable single-file preview from the site files."""

import base64
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
html = (ROOT / "index.html").read_text(encoding="utf-8")
css = (ROOT / "assets/style.css").read_text(encoding="utf-8")
js = (ROOT / "assets/main.js").read_text(encoding="utf-8")

html = html.replace(
    '<link rel="stylesheet" href="assets/style.css" />',
    f"<style>\n{css}\n</style>",
)
html = html.replace(
    '<script src="assets/main.js" defer></script>',
    f"<script>\n{js}\n</script>",
)


def embed_image(match: re.Match[str]) -> str:
    path = ROOT / match.group(1)
    image = base64.b64encode(path.read_bytes()).decode("ascii")
    return f'src="data:image/webp;base64,{image}"'


html = re.sub(r'src="(assets/img/web/[^\"]+\.webp)"', embed_image, html)
(ROOT / "dra-mariangela-zanchet-preview.html").write_text(html, encoding="utf-8")
