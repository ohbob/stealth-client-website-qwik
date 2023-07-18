---
title: AddToJournal
published : 2022-05-17T22:11:22.485Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Add text line to Journal (**not** SysJournal!)

### Params:

  *Text* : String for adding


<br> 
### DWS\Pascal Script:

```pascal
procedure AddToJournal(Text : String);
```


DWS\Pascal Script Example:
```pascal
begin
...
  if(GetDistance(unload_container) > 1) then 
    AddToJournal('Сумка далеко...')
  else 
  begin
 //   work here
      if((FindType($0DF9, Backpack) = 0) and (FindType($0F95, Backpack) = 0) and (FindType($0FA0, Backpack) = 0)) then begin
       AddToJournal('Переработка закончена...');
  end;
end;
```


### Python:

```python
def AddToJournal(Msg)
```
