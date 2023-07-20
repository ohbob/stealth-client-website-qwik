---
title: AddJournalIgnore
published : 2022-05-17T22:11:22.994Z
author: Vizit0r
summary: API
layout: blog
---

 

Ignore incoming messages, which equals or Contains "Str" param. 

**NB**: Not actual for connected clients.

### Params:

  *Str* : 

<br>

### DWS\Pascal Script:

```pascal
procedure AddJournalIgnore(Str : String);
```


DWS\Pascal Script Example:
```pascal
begin
	//Init here

	// Ignore some messages for journal flood prevention
	AddJournalIgnore( 'for mercenary points' );
	AddJournalIgnore( 'pour the completed potion into a bottle' ); 
	AddJournalIgnore( 'toss the failed mixture from the mortar' ); 
	AddJournalIgnore( ' в ярмарочной лотерее!' );
end;
```




### Python:

```python
def AddJournalIgnore(Str)
```
