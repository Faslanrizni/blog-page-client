import React from "react";
import {Link} from 'react-router-dom';

import Footer from '../components/Footer'

import MainBackground from "../components/MainBackground.jsx";
import Banner from "../components/Banner.jsx";


export default function Home(){
    return(
        <div>
            <MainBackground main={"mainHero"} >
                <Banner title={'Main Page'} subTitle={'rem Ipsum is simply dummy . Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an maIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'}>
                </Banner>
            </MainBackground>
            


            <section className={'section'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center mainCss ">



                            <div className="card-deck servicesN">

                                <div className="card">
                                    <img className="card-img-top" src="https://plus.unsplash.com/premium_photo-1682090580941-1dd31d301efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGlmZSUyMHN0eWxlfGVufDB8fDB8fHww" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Lifestyle blogs</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur culpa, dolorem, doloribus eos explicabo id inventore labore nulla quidem ratione saepe, sint voluptates! Ad assumenda, consectetur corporis deserunt, distinctio ea eligendi eos facere fuga fugit id incidunt iure laboriosam obcaecati odio perferendis quaerat quibusdam rem rerum sit, vel veritatis..</p>
                                    </div>

                                </div>
                                <div className="card">
                                    <img className="card-img-top" src="https://plus.unsplash.com/premium_photo-1669687759693-52ba5f9fa7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Food Blogs</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur consequuntur, cum eligendi exercitationem laudantium quaerat velit voluptas! Dignissimos eaque et excepturi illo laudantium molestias officia quo voluptate! Adipisci at aut blanditiis delectus ea enim ex expedita magni nostrum odio sed soluta suscipit tempore, tenetur totam ut voluptate. Autem, veniam!.</p>
                                    </div>

                                </div>
                                <div className="card">
                                    <img className="card-img-top" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Travel blogs</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquam aperiam commodi delectus dolores ducimus ex laboriosam nemo nesciunt, obcaecati odio omnis optio pariatur perferendis quaerat quas quibusdam quidem quisquam ratione recusandae repellat saepe, soluta tenetur ut voluptas. Et, impedit reiciendis? Accusantium culpa eum, expedita impedit laborum necessitatibus reprehenderit vel..</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />


        </div>
    )
}