---
title: GetGumpTextLines
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

 

Retrieve all text lines for the gump with list index *GumpIndex*

Returns nothing if gump index incorrect (out of gumps list) or char disconnected.

Method is similar to [GetGumpShortLines](../GetGumpShortLines) and [GetGumpButtonsDescription](../GetGumpButtonsDescription), but contains info ONLY text lines, no info about gump elements.

**Pascal Syntax:**

```pascal
procedure GetGumpTextLines(GumpIndex : Integer; var TL : TStringList);
```
Warning: param (with type TStringList) should be created before calling GetFindedList and be disposed after!  

Pascal Example:
```pascal
var 
b : TStringList; 
i,k : Integer; 

Begin 
b := TStringList.Create; 
for i := 0 to GetGumpsCount - 1 do 
begin  
  GetGumpTextLines(i,b); 
  if b.Count > 0 then
  begin
    for k := 0 to b.Count - 1 do   
      if b.Strings[i] = 'xxx' then
      //some work here  
  end; 
end;
b.free; 
End.
```

**Python Syntax:**
```python
def GetGumpTextLines(GumpIndex): --> list of string
```