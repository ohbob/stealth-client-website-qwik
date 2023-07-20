---
title: HTTP_Header
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

 

After calling [HTTP_Get](../HTTP_Get) or [HTTP_Post](../HTTP_Post) you can obtain returned header by using this method.

NB: If [HTTP_Get](../HTTP_Get) or [HTTP_Post](../HTTP_Post) not called before, or calling failed - returns '';

Pascal

```pascal
function HTTP_Header : String;
```




Python
```python
def HTTP_Header() -> string
```

