# Scrapy

## [Python Virtual Environments](https://docs.python.org/3/tutorial/venv.html#tut-venv)

``` bash
python -m venv scrapy-env
```

On Windows, run:

``` shell
scrapy-env\Scripts\activate
```

On Unix or MacOS, run:

``` shell
source scrapy-env/bin/activate
```

## Managing Packages with pip

``` shell
(scrapy-env) D:\Projects\Crawler> python -m pip install scrapy
```

## Display all of the packages installed in the virtual environment:

``` shell
(scrapy-env) D:\Projects\Crawler> python -m pip list
Package             Version
------------------- ---------
Scrapy              2.11.0
...
```

# [Scrapy](https://docs.scrapy.org/en/latest/intro/overview.html)

## What is Scrapy

Scrapy is a fast high-level web crawling and web scraping framework, used to crawl websites and extract structured data from their pages. It can be used for a wide range of purposes, from data mining to monitoring and automated testing.

## Create a file and name it to `quotes_spider.py`

``` python
import scrapy


class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        "https://quotes.toscrape.com/tag/humor/",
    ]

    def parse(self, response):
        for quote in response.css("div.quote"):
            yield {
                "author": quote.xpath("span/small/text()").get(),
                "text": quote.css("span.text::text").get(),
            }

        next_page = response.css('li.next a::attr("href")').get()
        if next_page is not None:
            yield response.follow(next_page, self.parse)
```

## Run the spider

``` shell
scrapy runspider quotes_spider.py -o quotes.jsonl
```

## In the `quotes.jsonl` file

``` json
{"author": "Jane Austen", "text": "\u201cThe person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.\u201d"}
{"author": "Steve Martin", "text": "\u201cA day without sunshine is like, you know, night.\u201d"}
{"author": "Garrison Keillor", "text": "\u201cAnyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.\u201d"}
...
```

## Creating a project

``` shell
scrapy startproject tutorial
```

# Reference

- [Scrapy](https://docs.scrapy.org/en/latest/index.html)
