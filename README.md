# kaoyan - search

- [Pico.css](https://github.com/picocss/pico)

# Development Environment with Meilisearch

Search service is based on [Meilisearch](https://meilisearch.com).

## Install and Running

[Offical Document](https://docs.meilisearch.com/learn/getting_started/quick_start.html#setup-and-installation)

```bash
./meilisearch
```

## Add Source Document for Searching

需要修改主键 `primaryKey=Index`

```bash
curl \
  -X POST 'http://localhost:7700/indexes/tiaoji/documents?primaryKey=Index' \
  -H 'Content-Type: application/json' \
  --data-binary @output.json

curl -X POST 'http://124.222.100.88/indexes/tiaoji/documents?primaryKey=Index' -H 'Content-Type: application/json' --data-binary @output.json
```

目前只有两条数据哈哈哈哈，剩下的我找办法补充

## Settings

还没测试，用来给搜索过滤，比如“校内调剂”，以后分数、科目应该也用得上

```bash
curl \
  -X PATCH 'http://localhost:7700/indexes/tiaoji/settings' \
  -H 'Content-Type: application/json' \
  --data-binary '{
    "filterableAttributes": [
      "Same"
    ]
  }'
```
