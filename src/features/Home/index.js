import React, { useState } from 'react';
import SideBar from '../../components/SideBar';


export default function Home() {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar />

                <div className="col py-3">
                    <h6>Página inicial</h6>

                    <div className="container">
                        <div className="accordion accordion-flush">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Projetos
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}