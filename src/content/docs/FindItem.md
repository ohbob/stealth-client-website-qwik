---
title: FindItem
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

 

Returns the last object found using the function by using the functions [FindType](../FindType) or [FindTypeEx](../FindTypeEx)

If no objects found, or char disconnected - returns 0.

NB: Including in result all items in Items stacks.




Pascal

```pascal
function FindItem():Cardinal
```



Python
```python
def FindItem(): -> uint
```


Example Pascal
```pascal
if FindTypeEx(bottle_type,bottle_color,Ground,false) > 0 then
begin
  UseObject(FindItem);
end;
```