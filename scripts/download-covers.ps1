# Re-download catalog covers from Open Library into images/covers/
# Run from repo root: powershell -ExecutionPolicy Bypass -File scripts/download-covers.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "images/covers"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

# slug + ISBN (medium cover). Update ISBNs if Open Library returns empty 43-byte placeholders.
$pairs = @(
  @{slug = "the-hobbit"; isbn = "9780547928227" },
  @{slug = "dune"; isbn = "9780441172719" },
  @{slug = "nineteen-eighty-four"; isbn = "9780451524935" },
  @{slug = "sapiens"; isbn = "9780062316097" },
  @{slug = "the-alchemist"; isbn = "9780062315007" },
  @{slug = "atomic-habits"; isbn = "9780735211292" },
  @{slug = "gone-girl"; isbn = "9780307588371" },
  @{slug = "educated"; isbn = "9780399590504" },
  @{slug = "the-hunger-games"; isbn = "9780439023528" },
  @{slug = "project-hail-mary"; isbn = "9780593135204" },
  @{slug = "the-martian"; isbn = "9780553418026" },
  @{slug = "enders-game"; isbn = "9780312853235" },
  @{slug = "klara-and-the-sun"; isbn = "9780593318171" },
  @{slug = "the-girl-with-the-dragon-tattoo"; isbn = "9780143170099" },
  @{slug = "sharp-objects"; isbn = "9780307341556" },
  @{slug = "thinking-fast-and-slow"; isbn = "9780374533557" },
  @{slug = "the-body"; isbn = "9780385539302" },
  @{slug = "a-little-life"; isbn = "9780804172707" },
  @{slug = "normal-people"; isbn = "9780571334650" },
  @{slug = "deep-work"; isbn = "9780349411903" }
)

foreach ($p in $pairs) {
  $url = "https://covers.openlibrary.org/b/isbn/$($p.isbn)-M.jpg"
  $dest = Join-Path $outDir "$($p.slug).jpg"
  Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
  $len = (Get-Item $dest).Length
  Write-Host "$($p.slug): $len bytes"
}
