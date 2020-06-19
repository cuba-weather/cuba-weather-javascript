const cheerio = require('cheerio')
const parser = require('xml2json')

let page = `<?xml version="1.0" encoding="ISO-8859-1"?>
<?xml-stylesheet href="../estilos/rss-style1.css" type="text/css"?>
<rss version="2.0">

 <channel>
    <title>Instituto de Meteorología de la República de Cuba</title>
    <link>http://www.insmet.cu/</link>
    <language>es-ES</language>
    <copyright>Copyright 1997-2011. INSMET - Todos los derechos reservados</copyright>
    <lastBuildDate>6/18/2020</lastBuildDate>
	 <image>
	 		<url>../svg/weather-storm.svg</url>
	 </image>
<item>
	 <title>Pronóstico del Tiempo para mañana.</title>
     <pubDate>6/18/2020
              17:51:10 </pubDate>
	 <description><![CDATA[Fecha: 18 de junio de 2020. Hora: 3:00 pm.<br><br>
	 					   <p align='justify'><font color='#003d6c'><i>…algunos chubascos y tormentas eléctricas en gran parte del país…</i></font><br>Estará parcialmente nublado y se nublará en la tarde en gran parte del país, con algunos chubascos y tormentas eléctricas, principalmente en localidades del interior.<br><br>Las temperaturas mínimas estarán entre 22 y 25 grados Celsius, superiores en zonas costeras. El día será cálido, con temperaturas máximas entre 31 y 34 grados Celsius, superiores en algunas localidades del interior.<br><br>Los vientos serán variables débiles, excepto en zonas de la costa norte central y oriental, donde serán del este entre 10 y 25 kilómetros por hora.<br><br>Habrá oleaje en el litoral norte oriental y poco oleaje en el norte central así como desde punta de Maisí hasta cabo Cruz. En el resto de los litorales la mar estará tranquila.<br><br></p>
						   Y. Arias
						   T. Keybavu.
    <hr>]]></description>
</item>
<!-- =leerTxT('/pronostico/Aviso/ACT.txt')%>
<item>
		<title>Aviso de Ciclon.</title>

		<description><![CDATA[
							  <doc[2]%>
							  <escrito()%>
							  <autor1%>
						      <autor2%>
	 <br><a href="../asp/genesis.asp?TB0=PLANTILLAS&TB1=AVISO2&TB2=0"> ver mas </a><hr>]]></description>
</item>-->

<item>
		<title>Pronóstico Extendido del Tiempo por Ciudades</title>
        <pubDate>6/18/2020
              17:51:10 </pubDate>
		<description><![CDATA[ fecha: 17/6/2020<br><br>
						 PINAR DEL RÍO<table><thead><th>día</th><th>T máxima (°C)</th><th>T minima (°C)</th><th>Estado</th></thead><tbody align="center"><tr>
	  						<td>18</td><td>31</td><td> 23</td><td>Lluvias en la Tarde</td></tr><tr>
	  						<td>19</td><td>32</td><td> 23</td><td>Chubascos</td></tr><tr>
							<td>20</td><td>32</td><td> 23</td><td>Lluvias aisladas</td></tr><tr>
							<td>21</td><td>32</td><td> 23</td><td>Lluvias en la Tarde</td></tr><tr>
						    <td>22</td><td>32</td><td> 23</td><td>Lluvias en la Tarde</td></tr>
	  </tbody></table>]]></description></item><item><title>LA HABANA</title> <description><![CDATA[ <table><thead><th>día</th><th>T máxima (°C)</th><th>T minima (°C)</th><th>Estado</th></thead><tbody align="center"><tr>
	  						<td>18</td><td>31</td><td> 24</td><td>Lluvias en la Tarde</td></tr><tr>
	  						<td>19</td><td>31</td><td> 24</td><td>Lluvias en la Tarde</td></tr><tr>
							<td>20</td><td>31</td><td> 24</td><td>Lluvias aisladas</td></tr><tr>
							<td>21</td><td>31</td><td> 24</td><td>Lluvias en la Tarde</td></tr><tr>
						    <td>22</td><td>31</td><td> 24</td><td>Lluvias en la Tarde</td></tr>
 	 </tbody></table>]]></description></item><item><title>VARADERO</title><description><![CDATA[ <table><thead><th>día</th><th>T máxima (°C)</th><th>T minima (°C)</th><th>Estado</th></thead><tbody align="center"><tr>
	  						<td>18</td><td>31</td><td> 25</td><td>Lluvias aisladas</td></tr><tr>
	  						<td>19</td><td>31</td><td> 25</td><td>Lluvias aisladas</td></tr><tr>
							<td>20</td><td>31</td><td> 25</td><td>Lluvias aisladas</td></tr><tr>
							<td>21</td><td>30</td><td> 25</td><td>Lluvias en la Tarde</td></tr><tr>
						    <td>22</td><td>31</td><td> 25</td><td>Lluvias en la Tarde</td></tr>
	  </tbody></table>]]></description></item><item><title>CIENFUEGOS</title><description><![CDATA[<table><thead><th>día</th><th>T máxima (°C)</th><th>T minima (°C)</th><th>Estado</th></thead><tbody align="center"><tr>
	  						<td>18</td><td>32</td><td> 23</td><td>Lluvias en la Tarde</td></tr><tr>
	  						<td>19</td><td>32</td><td> 23</td><td>Lluvias aisladas</td></tr><tr>
							<td>20</td><td>32</td><td> 23</td><td>Lluvias aisladas</td></tr><tr>
							<td>21</td><td>32</td><td> 23</td><td>Lluvias en la Tarde</td></tr><tr>
						    <td>22</td><td>32</td><td> 23</td><td>Lluvias en la Tarde</td></tr>
	  </tbody></table>]]></description></item><item><title>CAYO COCO</title><description><![CDATA[<table><thead><th>día</th><th>T máxima (°C)</th><th>T minima (°C)</th><th>Estado</th></thead><tbody align="center"><tr>
	  						<td>18</td><td>31</td><td> 25</td><td>Lluvias aisladas</td></tr><tr>
	  						<td>19</td><td>31</td><td> 25</td><td>Lluvias en la Tarde</td></tr><tr>
							<td>20</td><td>31</td><td> 25</td><td>Lluvias aisladas</td></tr><tr>
							<td>21</td><td>31</td><td> 25</td><td>Lluvias aisladas</td></tr><tr>
						    <td>22</td><td>31</td><td> 25</td><td>Lluvias aisladas</td></tr>
	  </tbody></table>]]></description></item><item><title>CAMAGÜEY</title><description><![CDATA[<table><thead><th>día</th><th>T máxima (°C)</th><th>T minima (°C)</th><th>Estado</th></thead><tbody align="center"><tr>
	  						<td>18</td><td>32</td><td> 23</td><td>Lluvias en la Tarde</td></tr><tr>
	  						<td>19</td><td>32</td><td> 23</td><td>Lluvias en la Tarde</td></tr><tr>
							<td>20</td><td>33</td><td> 23</td><td>Lluvias aisladas</td></tr><tr>
							<td>21</td><td>33</td><td> 23</td><td>Lluvias en la Tarde</td></tr><tr>
						    <td>22</td><td>33</td><td> 23</td><td>Lluvias en la Tarde</td></tr>
	  </tbody></table>]]></description></item><item><title>HOLGUIN</title><description><![CDATA[<table><thead><th>día</th><th>T máxima (°C)</th><th>T minima (°C)</th><th>Estado</th></thead><tbody align="center"><tr>
	  						<td>18</td><td>32</td><td> 23</td><td>Lluvias aisladas</td></tr><tr>
	  						<td>19</td><td>32</td><td> 23</td><td>Lluvias en la Tarde</td></tr><tr>
							<td>20</td><td>33</td><td> 23</td><td>Lluvias aisladas</td></tr><tr>
							<td>21</td><td>33</td><td> 23</td><td>Lluvias en la Tarde</td></tr><tr>
						    <td>22</td><td>33</td><td> 23</td><td>Lluvias en la Tarde</td></tr>
	  </tbody></table>]]></description></item><item><title>SANTIAGO DE CUBA</title><description><![CDATA[<table><thead><th>día</th><th>T máxima (°C)</th><th>T minima (°C)</th><th>Estado</th></thead><tbody align="center"><tr>
	  						<td>18</td><td>34</td><td> 25</td><td>Lluvias aisladas</td></tr><tr>
	  						<td>19</td><td>33</td><td> 25</td><td>Lluvias en la Tarde</td></tr><tr>
							<td>20</td><td>34</td><td> 25</td><td>Lluvias aisladas</td></tr><tr>
							<td>21</td><td>34</td><td> 25</td><td>Lluvias en la Tarde</td></tr><tr>
						    <td>22</td><td>34</td><td> 25</td><td>Lluvias en la Tarde</td></tr>
	  </tbody></table><br><a href="../asp/genesis.asp?TB0=PLANTILLAS&TB1=PT5"> ver mas </a><hr>]]></description>
</item>

<item>
		<title>Estado de la Sequía.</title>
		<description><![CDATA[<font color='#003d6c'><i>... Mayo con un 4 % del territorio nacional con déficits en los acumulados de las lluvias...<br><br></i></font><br>
							  Mayo, primer mes del período lluvioso en Cuba, finalizó con un 4 % del territorio nacional con déficits en los acumulados de las lluvias. De ellos 1% catalogado como moderado y un 3 % como débiles, ubicándose los mismos en las provincias de Pinar del Río, Las Tunas, Santiago de Cuba y Guantánamo. Solo el municipio Colombia, de la provincia Las Tunas, presentó más de un 25 % de sus áreas afectadas con déficits de moderado a extremo.<br><br><a href="../asp/link.asp?SQ"> ver mas </a><hr>]]></description>
</item>
</channel>
</rss>
`
describe('Ismet -> IsmetServcice', () => {
  it(`should parse info weather from ismet`, async () => {
    let pageJSON = JSON.parse(parser.toJson(page))
    let items = pageJSON.rss.channel.item
    let dataParsed = items.map((item) => {
      return {
        title: item.title,
        description: parseDescription(item.description).description,
        weatherDays: parseDescription(item.description).weatherDays,
        pubDate:
          item.pubDate === undefined ? 'notDate' : parseDate(item.pubDate),
      }
    })
    console.log(dataParsed)
  })
})

function parseDate(data) {
  let pubDate = data
    .replace('\n', '')
    .split(' ')
    .filter((el) => el !== '')
  let fecha = pubDate[0].split('/')
  let newDate = `${fecha[2]}-${fecha[0]}-${fecha[1]}T${pubDate[1]}`
  return newDate
}

function parseDescription(data) {
  let tables = data.replace('[\\n\\t ]', '').includes('<table>')
  let result = {}
  if (tables) {
    result.weatherDays = converTableToCSV(data)
  } else {
    result.description = parserHtmlDescription(data)
  }
  //   console.log(result)
  return result
}
function converTableToCSV(tableHtml) {
  const $ = cheerio.load(tableHtml)
  let weatherDays = []
  $('body > table > tbody > tr ').each((index, element) => {
    if (index === 0) return true
    const tds = $(element).find('td')
    weatherDays.push({
      day: $(tds[0]).text(),
      min: $(tds[1]).text(),
      max: $(tds[2]).text(),
      description: $(tds[3]).text(),
    })
  })
  return weatherDays
}
function parserHtmlDescription(descriptionHtml) {
  const $ = cheerio.load(descriptionHtml)
  let descriptionText = $('body').text()
  let descriptionToParse = descriptionText.split('\n\t')
  let description = descriptionToParse.map((el) => el.trim()).join('\n')
  return description
}
