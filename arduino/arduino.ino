#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include "LabDHT.cpp"
//==============================================================================

#define pinDHT 2
#define pinRealy 1
//==============================================================================

const char *ssid = "K-Lab";
const char *password = "allhailklab";

ESP8266WebServer HTTP(80);
LabDHT dht(pinDHT);

//==============================================================================

void dateAll()
{
	Serial.println("request handled");
	String msg = dht.getStatus();
	Serial.println(msg);
	HTTP.send(200, "text/plain", msg);
	//Temperature Humidity
};
//==============================================================================

void offRealy()
{
	pinMode(pinRealy, OUTPUT);
	Serial.println("offRealy");
	HTTP.send(200, "text/plain", "true");
};
//==============================================================================

void onRealy()
{
	pinMode(pinRealy, INPUT);
	Serial.println("onRealy");
	HTTP.send(200, "text/plain", "true");
};
//==============================================================================

void setup()
{
	delay(1000);

	pinMode(pinDHT, INPUT);

	Serial.begin(115200);

	WiFi.mode(WIFI_STA);
	WiFi.begin(ssid, password);

	Serial.println("WiFi connecting");
	for (int i = 0; i < 10; i++)
	{
		if (WiFi.status() == WL_CONNECTED)
			break;
		Serial.print(".");
		delay(1000);
	}
	Serial.println();

	if (WiFi.status() == WL_CONNECTED)
		Serial.println("WiFi connected");
	else
		Serial.println("WiFi not connected");

	Serial.print("IP = ");
	Serial.println(WiFi.localIP());

	HTTP.on("/", dateAll);
	HTTP.on("/onRelay", onRealy);
	HTTP.on("/offRelay", offRealy);

	HTTP.begin();
};
//==============================================================================

void loop()
{
	HTTP.handleClient();
	delay(1);
};