---
title: HTTP_Post
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

 

Executing HTTP Post for the selected *URL* .

PostData can be in *PostData* param (f.e. as pairs).

NB: In DWS *PostData* param can be String, f.e. Json etc.

Results of execution can be obtained by [HTTP_Body](../HTTP_Body) and [HTTP_Header](../HTTP_Header).

NB: If Post failed - HTTP_Header will return error message;

PascalScript:

```pascal
function HTTP_Post(URL : String;PostData : TStringList) : String;
```

DWS:
```pascal
function HTTP_Post(URL : String;PostData : String) : String; 
function HTTP_Post(URL : String;PostData : TStringList) : String;
```




Python
```python
def HTTP_Post(URL, PostData): -> string
where PostData - string
```

