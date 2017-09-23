.PHONY: _site

FILES := $(patsubst %.md,../%.html,$(wildcard *.md))

all: _site $(FILES)

_site:
	jekyll build

../index.html: _site/index.html
	cp $< $@

../%.html: _site/%/index.html
	cp $< $@
