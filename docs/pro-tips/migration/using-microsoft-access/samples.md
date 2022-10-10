---
draft: true
---
# Samples

## Queries

### Append items to PDNS

- Replace **localhost** with the name of your target list
- Replace **Links** with the name of your source list


```sql
INSERT INTO localhost ( Title, [Background Color], [Icon Link], [Foreground Color], Link, Description, Path )
SELECT TOP 5 Links.Title, Links.Color, Links.Icon, Links.TextColor, Links.Link, Links.Description, "/" & [slug] AS Expr1
FROM Links;
```
