---
title: FindVertical
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

 

Specifies the range for search methods [FindType](../FindType) or [FindTypeEx](../FindTypeEx) by vertical.

Default - 5.

NB. Usually, 1 floor width is 18-20.


Pascal

```pascal
var FindVertical:Integer
```



Python
```python
def SetFindVertical(Value)
def GetFindVertical() : -> iunt

```


Example Pascal
```pascal
FindVertical:= 25;'' look on the floor above and below
FindType(sheep_type, ground);
  AddAddToSystemJournal('On the three floors of the sheep found:' + IntToStr(FindQuantity));
```