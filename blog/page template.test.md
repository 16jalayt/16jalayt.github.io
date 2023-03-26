import styled from "styled-components"
import Image from  '@site/src/components/Image';

<!--- Must now be exported-->
export const ButtonLabel = styled.label`
width: 50%;
justify-text: center;
text-align: center;
color: red;
`

<!--- Just embed snippets right in-->
<ButtonLabel>This text should appear red if </ButtonLabel>
<Image src="https://live.staticflickr.com/65535/52769010216_019dcc730a_c.jpg" href="https://live.staticflickr.com/65535/52769010216_f18f650e5c_o.jpg"
flkr="https://www.flickr.com/photos/193261163@N03/52769010216/"/>
