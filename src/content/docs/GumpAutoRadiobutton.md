---
title: GumpAutoRadiobutton
published: 2021-10-05T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

 

Set hook for ONE incoming gump and check ALL existing gumps in stealth gump list for containing radiobuttons with **"return_value"** *RadiobuttonID*, if found - changing its **"status"** to *Value*. Normally,  **"status"** 0 mean unchecked, any other - checked.

NB: This method does NOT send a gump reply to server, it's just changing checkboxes status values. For reply to gump use [WaitGump](../WaitGump) or [NumGumpButton](../NumGumpButton)

Pascal

```pascal
procedure GumpAutoRadiobutton(RadiobuttonID : Integer; Value : Integer);
```


Pascal Example:
```pascal
begin
    WaitTargetGround($1BF5);  
    GumpAutoRadiobutton(1537, 1); //set hook for gump radiobutton with return_value 1537, to set its status to 1(checked)
    WaitGump('7956');   //set hook for gump button with return_value 7956. If found - send gump reply.
    UseObject(FindType($1EB9,backpack));//use hammer for receiving gump.
end;
```




Python

```python
def GumpAutoRadiobutton(RadiobuttonID, Value)
```


