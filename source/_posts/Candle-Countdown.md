---
title: Candle Countdown
date: 2020-04-09
update: 2021-02-14 12:50:19
categories: 
    - [en, projects]
tags:
    - mql5
---

# Introduction

People who perform financial transactions in financial markets often use price charts to visualize the market movement and support their decisions, a common type of chart for this purpose is the candlestick chart, this type of chart generates a candle with price indications of open, close, maximum and minimum price levels in a certain period, after that period a new candle begins to be formed. The purpose of this work is to create a stopwatch that indicates the amount of time remaining for the closing of the current candle, offering to trader another tool that facilitates the understanding of the chart. 

<!--more-->

<a target = "_blank" rel="noopener noreferrer" href="https://www.mql5.com/pt/code/28175">Repositório MQL5 CodeBase</a><br/>
<a target = "_blank" rel="noopener noreferrer" href="https://github.com/AbraaoM/CandleCountdown">Repositório Github</a>

# Methodology

The default function OnCalculate has inputs standard that enables the obtaining of some asset information negotiated one is the time information of opening the candle using this information along with the current period on the graph and the current time the countdown is calculated following the following equation:

<div align = "center">
HR = HAb - HAt + P
</div>

HR = Instant time for countdown;

HAb = Open time of current candle;

HAt = Current time (server time);

P = Current chart period where the indicators are applyed.

# Results

## v1.00

<div align = "center">
<img src="{% asset_path cd-v100.gif %}" alt="v1.00 example"/>
</div>

In this version, the display is made using the Comment function, that is, the counter will appear in the upper left corner of the graph. In this type of visualization, the counter is discreet and does not interfere with the reading of the graph, although it is difficult to read due to the standard font size of the display method used.

## v1.01

<div align = "center">
<img src="{% asset_path cd-v101.gif %}" alt="v1.01 example"/>
</div>

Added display using objects. An object of type label was created and anchored in the top right, it is possible to edit the font size and color.

The possibility to choose between the types of display, “comment” or “Big Number” has also been added.

## v01.02

<div align = "center">
<img src="{% asset_path cd-v102.gif %}" alt="v1.02 example"/>
</div>

Added the display still through objects, but now with an object of type text, which is created and moved in order to follow the closing price of the last tick.

It is recommended to use a smaller font in this “On Price” mode than in the “Big Number” mode.

In the displays "Big number" and "On price" the user can choose the best way to view the counter in terms of size, color and style of the font.

<div align = "center">
<img src="{% asset_path cd-entradas.png %}" alt="Inputs example"/>
</div>