---
title: FindQuantity
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

 

Returns amount of items in stack, found by by using the functions [FindType](../FindType) or [FindTypeEx](../FindTypeEx)

If no objects found, or char disconnected - returns 0.

if found object is not stack, returns 1.




Pascal

```pascal
function FindQuantity : Integer;
```



Python
```python
def FindQuantity(): -> int
```


Example Pascal
```pascal
FindType(BM, backpack);
  AddAddToSystemJournal('BM in last found stack:' + IntToStr(FindQuantity));
```