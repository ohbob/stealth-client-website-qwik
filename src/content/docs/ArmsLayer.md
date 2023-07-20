---
title: ArmsLayer
published : 2022-05-17T22:11:22.608Z
author: Vizit0r
summary: API
layout: blog
---

 

Returns layer number $13 - Arms(elbows)

Normally, that should be a simple constant, not function. But due to backwards compatibility it should be keeped as function.


 ### DWS\Pascal Script:

```pascal
function ArmsLayer : Byte;
```


DWS\Pascal Script Example 1:

```pascal
if ObjAtLayer(ArmsLayer) > 0 then 
  AddToSystemJournal('Arms ID:$' + IntToHex(ObjAtLayer(ArmsLayer),8));
```


DWS\Pascal Script Example 2:

```pascal
{If there is something on a layer, then remove}
if ObjAtLayer(ArmsLayer) <> 0 then
  begin
    unequip(ArmsLayer);
    wait(1000);
  end;
```

### Python:

```python
def ArmsLayer(): --> ubyte
```
