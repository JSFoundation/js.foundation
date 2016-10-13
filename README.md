# The JS Foundation Website

## Development

When running `jekyll serve` locally load the additional development config file to set the site URL to `http://localhost:4000`:

```
$ bundle exec jekyll serve --config _config.yml,_config_dev.yml
```

## Content

### Menus

The content of the menus is maintained in the `_data` folder. Use relative URLs for the `href`.

Only the "offcanvas menu" can contain one level submenus. The `href` of the parent item can be omitted if the menu item only serves as name of the submenu.

```
- title: "Parent"
  href: "/parent/"
  sub:
    - subtitle: "Child Page"
      subhref: "/parent/child-page/"
    - subtitle: "Another Child Page"
      subhref: "/parent/another-child-page/"
```

### Semantics

The page title is an `h1` heading. Don't include it in the content, but only set the page title in the [front matter](https://jekyllrb.com/docs/frontmatter/).

Each `h2` (`##`) heading on a page starts a new section. The text before the first `h2` heading is treated as intro text and added to the article header together with the page title. To use a different split tag, add `split: "[tag name]"` to the front matter of the page.

### Links & Images

You can have absolute URLs for internal links and images by prepending `{{ site.url }}`:

```
<a href="{{ site.url }}/name-of-page/">Link to Name of Page</a>

![Alt text of this image]({{ site.url }}/img/image.png)
```

### Projects & Events

Projects and Events are collections that use the "card" layout. Each item should be added as an `.md` file in the `_[collection-name]` folder. The "Front Matter" of this file should contain `name`, `site`, and `logo`. The logo file has to be in the `img/[collection-name]/` folder.

Don't include links in the description because it's wrapped in an anchor element already that links to the project site and links inside links results in invalid markup.

## Notes

### Google Analytics

The Google Analytics script is only included in production environment. The environment variable is "development" by default, but GitHub Pages will set it to "production" when it builds the site. If the site is hosted elsewhere, and not this variable needs to be set to "production" when deploying the site.
