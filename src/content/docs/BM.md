---
title: BM
published : 2022-05-18T19:17:51.285Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns reagent type: Blood Moss ($0F7B)

Normally, that should be a simple constant, not function. But due to backwards compatibility it should be keeped as function.

<br> 
### DWS\Pascal Script:

```pascal
function BM : Word;
```

DWS\Pascal Script Example:
```pascal
procedure recallRB(RBID : Cardinal; RuneNumber : Integer);    
begin
  if (Count(BP) > 0) and (Count(MR) > 0) and (Count(BM) > 0) then
  begin
//...recall work here
  end
  else
  begin 
    AddToSystemJournal('Need more reagents!'); 
    Halt;
  end;
end; 
```



### Python:

```python
def BM(): --> ushort
```
