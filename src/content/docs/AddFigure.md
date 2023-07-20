---
title: AddFigure
published : 2022-05-17T20:59:05.255Z
author: Vizit0r
summary: API
layout: blog
---

 

Add figure to list and returns its index (can be used for [RemoveFigure](../RemoveFigure))

The figure will be drawed on Map page for **current** char. Figures are not cleaning when disconnected.

### Params:
  *figure* : TMapFigure record with figure params.

 ### DWS\Pascal Script:

```pascal
function AddFigure(const figure : TMapFigure) : Cardinal;
```

Types: 
```pascal
TMapFigure = record
  kind : TFigureKind;
  coord : TFigureCoord;
  x1 : Integer;
  y1 : Integer;
  x2 : Integer;
  y2 : Integer;
  brushColor : TColor;
  brushStyle : TBrushStyle;
  color : TColor;
  worldNum : Byte; //Number of World (Present world number can be obtained by [WorldNum](../WorldNum)). At the moment, 6 world available (Felucca=0, Trammel=1, Ilshenar=2, Malas=3, Tokuno=4, Tel Mur=5).
  text : String;  
end;
```
where

```pascal
TFigureCoord = (fcWorld, fcScreen); //World coodinates or local coordinates on map tab area

TFigureKind = (fkLine, fkEllipse, fkRectangle, fkDirection, fkText);

TBrushStyle = (bsSolid, bsClear, bsHorizontal, bsVertical,  bsFDiagonal, bsBDiagonal, bsCross, bsDiagCross);

```


DWS\Pascal example:

```pascal
PROGRAM Test;
var
  temp11 : TMapFigure;
begin
  temp11.kind := fkRectangle;       
  temp11.coord := fcScreen; 
  temp11.x1 := 55;
  temp11.x2 := 99;
  temp11.y1 := 55;
  temp11.y2 := 99;
  temp11.brushColor := 8888;
  temp11.worldNum := 1;
  temp11.text := 'test';  
  AddFigure(temp11);    
 end.
```

DWS\Pascal example 2:

```pascal
PROGRAM Test;
var
  temp12 : TMapFigure;
begin
  temp12.kind := fkRectangle;       
  temp12.coord := fcWorld; 
  temp12.x1 := 3172;
  temp12.x2 := 3179;
  temp12.y1 := 784;
  temp12.y2 := 781;
  temp12.brushColor := 8888;
  temp12.worldNum := 1;
  temp12.text := 'My house';  
  AddFigure(temp12);    
 end.
```

### Python:
All Figures methods not implemented.
