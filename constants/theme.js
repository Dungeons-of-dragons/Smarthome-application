/* 
 useEffect(() => {
      const influxQuery = async () => {
          try {
              const response = await fetch('http://192.168.1.109:8086', {
                  method: 'POST',
                  headers: {
                      'Authorization': 'Token totRedKcoRsQ2QYKOHNRsJCfV5J9k-jGSzPVh6atEoL8g5E-hBiBSryeX-pVOn4dacjLPHJuPTIk3U1ryJbNBw==',
                      'Accept': 'application/csv',
                      'Content-type': 'application/vnd.flux',
                      'Access-Control-Allow-Origin':'*'
                  },
                  body: JSON.stringify({
                      query: `
                          from(bucket:"testdht")
                          |> range(start: -36h)
                          |> filter(fn: (r) => r._measurement == "dht11" and r._field == "humidity")
                          |> aggregateWindow(every: 5m, fn: mean)
                      `,
                  }),
              });

              const rawData = await response.text();
              const parsedData = papa.parse(rawData, {header: true}).data;
              const formattedData = parsedData.map(item => {
    return {
      x: new Date(item._time), // convert the time string to a Date object
      y: parseFloat(item._humidity) // replace 'value' with the actual column name for the y value
    };
});
setData(formattedData); // Set the formatted data to the state
          } catch (error) {
              console.error(`Request error: ${error.message}`);
          }
      };

      influxQuery();
  }, []);

*/