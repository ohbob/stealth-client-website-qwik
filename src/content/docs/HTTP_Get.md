---
title: HTTP_Get
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

 

Executing HTTP Get for the selected *URL* . 

If param *LStream* is not null - after execution it will be filled with results.

Results of execution can be obtained by [HTTP_Body](../HTTP_Body) and [HTTP_Header](../HTTP_Header).

NB: If HTTP_Get failed - HTTP_Header will return error message;

Pascal

```pascal
procedure HTTP_Get(URL : String;LStream: TMemoryStream = nil);
```




Python
```python
def HTTP_Get(URL): -> string
```

