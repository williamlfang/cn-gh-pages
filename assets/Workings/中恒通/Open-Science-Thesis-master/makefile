##------------------------------------------------------------------------------------##
##------------------------------------------------------------------------------------##
## Content: Open-Science-Thesis LaTeX-Makefile
## Usage: Compile Open-Science-Theses  
## Author: Claas-Thido Pfaff
##------------------------------------------------------------------------------------##
##------------------------------------------------------------------------------------##

# Maindocument
DOCUMENT = open_science_thesis

# Dependencies maindocument
DEPENDENCIES = $(DOCUMENT).Rnw ost/subdocuments/*.cls usr/subdocuments/bibliography/*.bib usr/subdocuments/chapters/* usr/subdocuments/options/* ost/data/*.csv

# Programs used 
KNITR = knit
BIBTEX = biber 
COMPILER = pdflatex -interaction=nonstopmode
# The Open-Science-Thesis is prepared for Lua-LaTeX if you prefer it. Just comment out pdflatex and comment in lualatex as compiler
# COMPILER = lualatex 
PACKER= tar -czf
REMOVER = @-rm -r
PRINTER = @-echo 
GREPPER = @-grep  
RIGHTSETTER = @-chmod
COPY = @-cp -r
PDFVIEWER = okular
DATE = $(shell date +%y%m%d)
GLOSSARYINDEXER = makeglossaries

# Example and Empty files  
SUBDOCFOLDER = usr/subdocuments/
EXMPLDOCS = ost/subdocuments/exmpl/bibliography/  ost/subdocuments/exmpl/chapters/ ost/subdocuments/exmpl/options/
TEMPDOCS =  ost/subdocuments/temp/bibliography/  ost/subdocuments/temp/chapters/ ost/subdocuments/temp/options/

TEMPREADME = ost/subdocuments/temp/README.md
EXMPLREADME = ost/subdocuments/exmpl/README.md  

# Base folder 
BASEFOLDER = `pwd` 

# Git hooks 
HOOKSOURCE = ost/data/ostGitHook
GITHOOKPATH = .git/hooks
HOOKRIGHTS = 744

# Archive document
ARCHNAME = $(DOCUMENT)_$(DATE).tar.gz
ARCHFILES = $(DOCUMENT).pdf $(DOCUMENT).Rnw ost/ usr/ makefile

# Clean up the document folder
CLEANFILES = usr/graphics/dynamic/* *.gin usr/cache/* *.xdy *tikzDictionary *.idx *.mtc* *.glo *.maf *.ptc *.tikz *.lot *.dpth *.figlist *.dep *.log *.makefile *.out *.map *.tex *.toc *.aux *.tmp *.bbl *.blg *.lof *.acn *.acr *.alg *.mw *.tdo *.glg *.gls *.ilg *.ind *.ist *.slg *.syg *.syi *.acn *.dvi *.ist *.syg *.synctex.gz *.bcf *.run.xml *-blx.bib  *.txt

# Default rule
all: $(DOCUMENT).pdf 

$(DOCUMENT).pdf: $(DEPENDENCIES)  
	$(KNITR) $(DOCUMENT).Rnw $(DOCUMENT).tex --no-convert
	$(COMPILER) $(DOCUMENT).tex
	$(COMPILER) $(DOCUMENT).tex
	$(BIBTEX) $(DOCUMENT)
	$(COMPILER) $(DOCUMENT).tex

gloss:	
	$(COMPILER) $(DOCUMENT).tex
	$(GLOSSARYINDEXER) $(DOCUMENT)
	$(COMPILER) $(DOCUMENT).tex
	$(GLOSSARYINDEXER) $(DOCUMENT)
	$(COMPILER) $(DOCUMENT).tex

allgloss:	 
	$(KNITR) $(DOCUMENT).Rnw $(DOCUMENT).tex --no-convert
	$(COMPILER) $(DOCUMENT).tex
	$(COMPILER) $(DOCUMENT).tex
	$(BIBTEX) $(DOCUMENT)
	$(COMPILER) $(DOCUMENT).tex
	$(GLOSSARYINDEXER) $(DOCUMENT)
	$(COMPILER) $(DOCUMENT).tex
	$(GLOSSARYINDEXER) $(DOCUMENT)
	$(COMPILER) $(DOCUMENT).tex

# Initproject 

# It usese the R package ProjectTemplate to create a Project inside the
# usr/statistics folder. The Template offers a nice and clean folder structure
# and services for your analyses. For more information see the projects
# homepage.  

initrproject:  
	# Works only with R package "Project Template" installed
	rm -rf usr/statistics/rproject
	Rscript -e "library(ProjectTemplate); create.project('usr/statistics/rproject')" 

# Buildserver 

# It is a continous integration service for your Open-Science-Thesis document. 
# You can start it by issuing the task below. It starts a server that tracks 
# changes in the directory and rebuilds your document to pdf. 

continous:  
	# needs ruby and gem fssm
	ruby ost/server/buildserver.rb 
	# latexmk -pvc -pdf -interaction=nonstopmode $(DOCUMENT).tex

# Showpdf 

# Simply calls the PDF viewer defined under pgrogams to schow you the created
# PDF file.

showpdf:
	$(PDFVIEWER) $(DOCUMENT).pdf & 

# Warnings 

# Extracts warning messages from the LaTeX log files to display them nicely for
# inspection.

warnings:
	$(PRINTER) "----------------------------------------------------o"
	$(PRINTER) "Multiple defined lables!"
	$(PRINTER) ""
	$(GREPPER) 'multiply defined' $(DOCUMENT).log
	$(PRINTER) "----------------------------------------------------o"
	$(PRINTER) "Undefined lables!"
	$(PRINTER) ""
	$(GREPPER) 'undefined' $(DOCUMENT).log
	$(PRINTER) "----------------------------------------------------o"
	$(PRINTER) "Warnings!"
	$(PRINTER) ""
	$(GREPPER) 'Warning' $(DOCUMENT).log
	$(PRINTER) "----------------------------------------------------o"
	$(PRINTER) "Over- and Underfull boxes!"
	$(PRINTER) ""
	$(GREPPER) 'Overfull' $(DOCUMENT).log
	$(GREPPER) 'Underfull' $(DOCUMENT).log
	$(PRINTER) "----------------------------------------------------o"

# Clean 

# Cleans the document from generated files. This taks is called automatically
# before backing up the document.

clean:
	$(REMOVER) $(CLEANFILES)	

# Archive

# Backup of the document. It creates a archive with all files inside it to
# reproduce the document.

archive: 
	make clean
	$(PACKER) $(ARCHNAME) $(ARCHFILES)

# Example and Temps content

# The tasks for example and temp content can be used switch between an empty
# and a document with examples. This is useful as the Open-Science-Thesis comes
# usually filled with example content to show you how things work. If you are
# already familiar with LaTeX and onyly want to have an empty document to start
# with you can just issue eht "tmpdoc" task below. If you like to remove the
# content from the GitHub readme file you can use the "rmpreadme" task instead.
# The original exmaple contens can be restored with the "exmpl*" tasks but
# NOTE: This overwrites your files.

# exmpldoc:
	# $(COPY) $(EXMPLDOCS) $(SUBDOCFOLDER)  

# exmplreadme:
	# $(COPY) $(EXMPLREADME) $(BASEFOLDER) 

# tmpdoc:
	# $(COPY) $(TEMPDOCS) $(SUBDOCFOLDER) 

# tmpreadme:
	# $(COPY) $(TEMPREADME) $(BASEFOLDER) 

# set-/rmgithooks 

# The set task creates the githooks required to display github information
# inside of your PDF. If you do no longer need the hooks you can also remove
# them with the rmgithooks task. 

setgithooks:  
	$(COPY) $(HOOKSOURCE) $(GITHOOKPATH)/post-checkout 
	$(COPY) $(HOOKSOURCE) $(GITHOOKPATH)/post-commit 
	$(COPY) $(HOOKSOURCE) $(GITHOOKPATH)/post-merge 
	$(RIGHTSETTER) $(HOOKRIGHTS) $(GITHOOKPATH)/* 

rmgithooks:
	$(REMOVER) $(GITHOOKPATH)/post-checkout 
	$(REMOVER) $(GITHOOKPATH)/post-commit 
	$(REMOVER) $(GITHOOKPATH)/post-merge  

# Prep 

# As the name suggest this is for preparation purposes and should be used for
# development only.  It helps me to put all stuff where I need it for example
# and temp content.

prep: 
	# This is a development only task
	$(COPY) usr/subdocuments/* ost/subdocuments/exmpl/
	$(COPY) README.md ost/subdocuments/exmpl/
	$(COPY) usr/subdocuments/options/ ost/subdocuments/temp/  

# Installers (this package is not maintained at the moment but works well so far)
installtikzdev:  
	Rscript -e "install.packages('tikzDevice', repos='http://R-Forge.R-project.org')" 
