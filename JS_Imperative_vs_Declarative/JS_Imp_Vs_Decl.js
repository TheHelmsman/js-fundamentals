/**
 * A real-life parallel in the imperative world would be entering a bar
 * for a beer, and giving the following instructions to the bartender:
 * - Take a glass from the shelf
 * - Put the glass in front of the draft
 * - Pull down the handle until the glass is full
 * - Pass me the glass
 */
const toLowerCase = input => {
  const output = []
  for (let i=0; i < length; i++) {
    output.push(input[i].toLowerCase())
  }
  return output
}

//  Googe maps SDK example
const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: myLatLng,
})
const marker = new google.maps.Marker({
  position: myLatLng,
  title: 'Hello world!',
})
marker.setMap(map)
 /**
  * In the declarative world, instead, you would just say: 'Beer please'
  */
const toLowerCase = input => input.map(
  value => value.toLowerCase()
)

//  map using React component
<Gmaps zoom={4} center={myLatLng}>
  <Marker position={myLatLng} Hello world!/>
</Gmaps>