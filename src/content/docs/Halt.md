---
title: Halt
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

 

Immendiately stops the current running internal script (PS or DWS).



Pascal

```pascal
procedure Halt;

```




Example Pascal

```pascal
program test;
begin
if Dead then 
begin 
    AddToSystemJournal('Char dead!');
    Disconnect;
    Halt;
end;
```
    



