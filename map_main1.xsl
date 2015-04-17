<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xsl:stylesheet[ <!ENTITY % core SYSTEM "_entities.ent"> %core; ]>

<!--
 Copyright (c) Art. Lebedev | http://www.artlebedev.ru/
 Updated 2014-11-05 by Rie
-->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:import href="main.xsl" />
  <xsl:output method="html" encoding="utf-8" indent="yes" omit-xml-declaration="yes" />

    <xsl:template match="/&root_element;">
    <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html></xsl:text>
        <xsl:call-template name="main_code_copyright" />
        <html>
            <head>
                <title>
                    <xsl:value-of select="&current_document;/window-title" />
                </title>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" href="/f/min/bootstrap/bootstrap.css"/>
                <link rel="stylesheet" href="/f/min/posadit-les/style_forest.css"/>
                <script type="text/javascript" src="/f/min/main.build.js"></script>
                <script type="text/javascript" src="/f/min/bootstrap/bootstrap.js"></script>
            </head>
            <body>
                <h1>
                    <xsl:call-template name="main_h1" />
                </h1>
                <xsl:apply-templates select="&content;/form_zakaz/node()" mode="html" />
                <xsl:apply-templates select="&content;/map_main1/node()" mode="html" />
            </body>
        </html>

    </xsl:template>


</xsl:stylesheet>
