#include "DHT.h"

class LabDHT
{
	private:
		const int pinDate;
		DHT *dht;
	public:
		LabDHT(int pin):pinDate(pin)
		{
			dht = new DHT(pinDate, DHT11);
			dht->begin();
		}

		String getStatus()
		{
			String str = "";
			int t = dht->readTemperature();
			int h = dht->readHumidity();
			if (isnan(t) || isnan(h))
				return "none none";
			str += t;
			str += " ";
			str += h;
			return str;
		}
};

