KnitPost <- function(input, base.url = "/") {
  require(knitr)
  opts_knit$set(base.url = base.url)
  fig.path <- paste0("figs/", sub(".Rmd$", "", basename(input)), "/")
  opts_chunk$set(fig.path = fig.path)
  render_jekyll()
  knit(input, envir = parent.frame())
}
KnitPost("2012-07-03-knitr-jekyll.Rmd")