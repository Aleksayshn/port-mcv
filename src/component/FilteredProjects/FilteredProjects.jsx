import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubTitle from "../SubTitle/SubTitle";
import Box from "../Box/Box";
import { Container, Title, SecondTitle, Item, List, Body, Img, TextBody, Text, Link, IconHtml, IconReact, IconSass, IconJs, IconNode } from "./FilteredProjects.styled";
import { FaReact, FaHtml5, FaSass, FaNode } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

import pic1 from '../../img/1.jpg';
import pic2 from '../../img/2.jpg';
import pic3 from '../../img/3.jpg';
import pic4 from '../../img/4.jpg';
import pic5 from '../../img/5.jpg';
import pic6 from '../../img/6.jpg';
import pic7 from '../../img/7.jpg';
import pic8 from '../../img/8.jpg';


const iconHtml = <IconHtml><FaHtml5 style={{ fontSize: "20px" }} /></IconHtml>;
const iconReact = <IconReact><FaReact style={{ fontSize: "20px" }} /></IconReact>;
const iconSass = <IconSass><FaSass style={{ fontSize: "20px" }} /></IconSass>;
const iconJs = <IconJs><DiJavascript1 style={{ fontSize: "20px" }} /></IconJs>;
const iconNode = <IconNode><FaNode style={{ fontSize: "20px" }} /></IconNode>;

const FilteredProjects = () => {
    const [filters, setFilters] = useState([]);
    const params = useParams();

    useEffect(() => {
        try {
            const filter = params.filters.split('&')
            setFilters(filter)
        } catch {
            setFilters([])
        }
    }, [params])

    return (
        <Box>
            <SubTitle text={'Projects'} />
            <Container>
                <List>
                    {(filters.length === 0 || (filters.includes('HTML') || filters.includes('CSS'))) && <Item>
                        <Title>Project 1 <SecondTitle>&#47;&#47; Web Studio</SecondTitle></Title>
                        <Body>
                            <Img src={pic1} alt="preview project 1" />
                            <TextBody>
                                <Text>Independent layout creation according to the design.</Text>
                                <Link target="_blank" href="https://aleksayshn.github.io/goit-hw-WebStudio/">view-project</Link>
                            </TextBody>
                            {iconHtml}
                            {iconSass}
                        </Body>
                    </Item>}
                    {(filters.length === 0 || (filters.includes('HTML') || filters.includes('CSS'))) && <Item>
                        <Title>Project 2 <SecondTitle>&#47;&#47; ICE CREAM</SecondTitle></Title>
                        <Body>
                            <Img src={pic2} alt="preview project 2" width="370" />
                            <TextBody>
                                <Text>Team collaboration, my role on the project was a team lead.</Text>
                                <Link target="_blank" href="https://aleksayshn.github.io/team-proj-IceCream/ ">view-project</Link>
                            </TextBody>
                            {iconHtml}
                            {iconSass}
                        </Body>
                    </Item>}
                    {(filters.length === 0 || filters.includes('JS')) && <Item>
                        <Title>Project 3 <SecondTitle>&#47;&#47; Filmoteka</SecondTitle></Title>
                        <Body>
                            <Img src={pic3} alt="preview project 3" width="370" />
                            <TextBody>
                                <Text>Team collaboration, my role: configuring the connection API, Firebase authentication.</Text>
                                <Link target="_blank" href="https://lenifraud.github.io/Filmoteka/ ">view-project</Link>
                            </TextBody>
                            {iconJs}
                        </Body>
                    </Item>}
                    {(filters.length === 0 || filters.includes('React')) && <Item>
                        <Title>Project 4 <SecondTitle>&#47;&#47; Phonebook</SecondTitle></Title>
                        <Body>
                            <Img src={pic4} alt="preview project 4" width="370" />
                            <TextBody>
                                <Text>Independent work, React, Redux Toolkit.</Text>
                                <Link target="_blank" href="https://aleksayshn.github.io/goit-react-hw-08-phonebook">view-project</Link>
                            </TextBody>
                            {iconReact}
                        </Body>
                    </Item>}
                    {(filters.length === 0 || filters.includes('React')) && <Item>
                        <Title>Project 5 <SecondTitle>&#47;&#47; SlimMom</SecondTitle></Title>
                        <Body>
                            <Img src={pic5} alt="preview project 5" width="370" />
                            <TextBody>
                                <Text>Team collaboration on React, My role: date-fns for food consumption characteristics list; Theme: (switcher).</Text>
                                <Link target="_blank" href="https://katerynachernetska.github.io/SlimMom">view-project</Link>
                            </TextBody>
                            {iconReact}
                        </Body>
                    </Item>}



                    {(filters.length === 0 || filters.includes('Node')) && <Item>
                        <Title>Project 6 <SecondTitle>&#47;&#47; Rest-API-delivery</SecondTitle></Title>
                        <Body>
                            <Img src={pic6} alt="preview project 6" width="370" />
                            <TextBody>
                                <Text>Independent work, Technologies: Express.js</Text>
                                <Link target="_blank" href="https://github.com/Aleksayshn/rest-api-delivery">view-project</Link>
                            </TextBody>
                            {iconNode}
                        </Body>
                    </Item>}
                    
                    {(filters.length === 0 || filters.includes('Node')) && <Item>
                        <Title>Project 7 <SecondTitle>&#47;&#47; Storage API</SecondTitle></Title>
                        <Body>
                            <Img src={pic6} alt="preview project 6" width="370" />
                            <TextBody>
                                <Text>Independent work, echnologies: Express.js, Mongoose as an ORM for interacting with a MongoDB database, SendGrid for email validations. With unit tests for the login controller using the Jest</Text>
                                <Link target="_blank" href="https://github.com/Aleksayshn/REST-API">view-project</Link>
                            </TextBody>
                            {iconNode}
                        </Body>
                    </Item>}

                    {(filters.length === 0 || filters.includes('Node') || filters.includes('React')) && <Item>
                        <Title>Project 8 <SecondTitle>&#47;&#47; Coursegarden</SecondTitle></Title>
                        <Body>
                            <Img src={pic7} alt="preview project 7" width="370" />
                            <TextBody>
                                <Text>Team collaboration on React, Nest. My role: Google Auth, sign-up, login, and password management  Utilizing RTK Query for state management  Configured SendGrid for verification emails, password reset and account updates. Developed admin dashboard with Material-UI, platform management and oversight.</Text>
                                <Link target="_blank" href="https://getcourse.cloud/">view-project</Link>
                            </TextBody>
                            {iconNode}
                        </Body>
                    </Item>}

                    {(filters.length === 0 || filters.includes('React')) && <Item>
                        <Title>Project 8 <SecondTitle>&#47;&#47; DeliveryApp</SecondTitle></Title>
                        <Body>
                            <Img src={pic8} alt="preview project 8" width="370" />
                            <TextBody>
                                <Text>Independent work on React. Functionalities: filter/sort/search, cart/wishlist/order/address management, checkout, authentication, responsive</Text>
                                <Link target="_blank" href="https://github.com/Aleksayshn/DeliveryApp">view-project</Link>
                            </TextBody>
                            {iconReact}
                        </Body>
                    </Item>}

                </List>
            </Container >
        </Box>)
};

export default FilteredProjects;