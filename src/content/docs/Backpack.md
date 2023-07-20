---
title: Backpack
published : 2022-05-18T19:17:51.719Z
author: Vizit0r
summary: API
layout: blog
---

 

Returns backpack ID (of Current Character)

If char not connected to UO server - returns 0.

 ### DWS\Pascal Script:

```pascal
function Backpack : Cardinal;
```

DWS\Pascal Script Example 1:
```pascal
if Count(runes) < 10 then
begin
   MoveItem(runestack ,10-Count(runes), Backpack, 0,0,0)
end;
```

DWS\Pascal Script Example 2:
```pascal
if Count(runes) < 10 then
begin
   FindType($ EED, Backpack)
end;
```


### Python:

```python
def Backpack(): --> uint
```
