---
title: BraceLayer
published : 2022-05-18T19:17:51.236Z
author: Vizit0r
summary: API
layout: blog
---

 

Returns layer number $E - Bracelet. 

Normally, that should be a simple constant, not function. But due to backwards compatibility it should be keeped as function.

 ### DWS\Pascal Script:

```pascal
function BraceLayer : Byte;
```


DWS\Pascal Script Example:

```pascal
{If there is something on a layer, then remove}
if ObjAtLayer(BraceLayer) <> 0 then
  begin
    unequip(BraceLayer);
    wait(1000);
  end;
```

### Python:

```python
def BraceLayer(): --> ubyte
```
