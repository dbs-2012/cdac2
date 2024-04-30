import React from 'react'
import './Theory.css'
import { Link } from 'react-router-dom'
import Image from '../../images/proof.png'
import Image2 from '../../images/proof2.png'
import Image3 from '../../images/proof3.png'
import Image4 from '../../images/proof4.png'
import Image5 from '../../images/proof5.png'

const Theory = () => {
    return (
        <>
            <div className="theory-card">
                <div className="theory-head-container">
                    Theorem
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        Basic Proportionality theorem was introduced by a famous Greek Mathematician, Thales, hence it is also called Thales Theorem. According to him, for any two equiangular triangles, the ratio of any two corresponding sides is always the same. Based on this concept, he gave theorem of basic proportionality (BPT). This concept has been introduced in similar triangles.  If two triangles are similar to each other then,
                        <ol type='i'>
                            <li>Corresponding angles of both the triangles are equal</li>
                            <li>Corresponding sides of both the triangles are in proportion to each other</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="theory-card">
                <div className="theory-head-container">
                    Basic Proportionality Theorem Proof
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        Consider a triangle ΔABC, as shown in the given figure. In this triangle, we draw a line PQ parallel to the side BC of ΔABC and intersecting the sides AB and AC in P and Q, respectively.
                    </div>
                </div>
                <div className="theory-image">
                    <img src={Image} alt="Proof 1" />
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        <div>According to the basic proportionality theorem as stated above, we need to prove:</div>
                        <div>AP/PB = AQ/QC</div>
                    </div>
                </div>
                <div className="theory-body-container theory-headings">
                    <div className="theory-body">
                        Solution
                    </div>
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        Join the vertex B of ΔABC to Q and the vertex C to P to form the lines BQ and CP and then drop a perpendicular QN to the side AB and also draw PM⊥AC as shown in the given figure.
                    </div>
                </div>
                <div className="theory-image">
                    <img src={Image2} alt="Proof 2" />
                </div>
                <div className="theory-body-container theory-headings">
                    <div className="theory-body">
                        Proof
                    </div>
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        <div>Now the area of ∆APQ = 1/2 × AP × QN (Since, area of a triangle= 1/2× Base × Height)</div>
                        <div>Similarly, area of ∆PBQ= 1/2 × PB × QN</div>
                        <div>area of ∆APQ = 1/2 × AQ × PM</div>
                        <div>Also,</div>
                        <div className='theory-equations'>Area of ∆QCP = 1/2 × QC × PM ………… (1)</div>
                        <div>Now, if we find the ratio of the area of triangles ∆APQand ∆PBQ, we have</div>
                    </div>
                </div>
                <div className="theory-body-container theory-equations">
                    <div className="theory-body">
                        <math xmlns="http://www.w3.org/1998/Math/MathML" className='formulae'>
                            <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
                                <mtr>
                                    <mtd>
                                        <mfrac>
                                            <mrow>
                                                <mi>A</mi>
                                                <mi>r</mi>
                                                <mi>e</mi>
                                                <mi>a</mi>
                                                <mtext>&#xA0;</mtext>
                                                <mi>o</mi>
                                                <mi>f</mi>
                                                <mtext>&#xA0;</mtext>
                                                <mo>&#x25B3;</mo>
                                                <mi>A</mi>
                                                <mi>P</mi>
                                                <mi>Q</mi>
                                            </mrow>
                                            <mrow>
                                                <mi>A</mi>
                                                <mi>r</mi>
                                                <mi>e</mi>
                                                <mi>a</mi>
                                                <mtext>&#xA0;</mtext>
                                                <mi>o</mi>
                                                <mi>f</mi>
                                                <mtext>&#xA0;</mtext>
                                                <mo>&#x25B3;</mo>
                                                <mi>P</mi>
                                                <mi>B</mi>
                                                <mi>Q</mi>
                                            </mrow>
                                        </mfrac>
                                        <mo>=</mo>
                                        <mfrac>
                                            <mrow>
                                                <mfrac>
                                                    <mn>1</mn>
                                                    <mn>2</mn>
                                                </mfrac>
                                                <mo>&#xD7;</mo>
                                                <mi>A</mi>
                                                <mi>P</mi>
                                                <mo>&#xD7;</mo>
                                                <mi>Q</mi>
                                                <mi>N</mi>
                                            </mrow>
                                            <mrow>
                                                <mfrac>
                                                    <mn>1</mn>
                                                    <mn>2</mn>
                                                </mfrac>
                                                <mo>&#xD7;</mo>
                                                <mi>P</mi>
                                                <mi>B</mi>
                                                <mo>&#xD7;</mo>
                                                <mi>Q</mi>
                                                <mi>N</mi>
                                            </mrow>
                                        </mfrac>
                                        <mo>=</mo>
                                        <mfrac>
                                            <mrow>
                                                <mi>A</mi>
                                                <mi>P</mi>
                                            </mrow>
                                            <mrow>
                                                <mi>P</mi>
                                                <mi>B</mi>
                                            </mrow>
                                        </mfrac>
                                    </mtd>
                                </mtr>
                            </mtable>
                        </math>
                    </div>
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        Similarly,
                    </div>
                </div>
                <div className="theory-body-container theory-equations">
                    <div className="theory-body">
                        <math xmlns="http://www.w3.org/1998/Math/MathML" className='formulae'>
                            <mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
                                <mtr>
                                    <mtd>
                                        <mfrac>
                                            <mrow>
                                                <mi>A</mi>
                                                <mi>r</mi>
                                                <mi>e</mi>
                                                <mi>a</mi>
                                                <mtext>&#xA0;</mtext>
                                                <mi>o</mi>
                                                <mi>f</mi>
                                                <mtext>&#xA0;</mtext>
                                                <mo>&#x25B3;</mo>
                                                <mi>A</mi>
                                                <mi>P</mi>
                                                <mi>Q</mi>
                                            </mrow>
                                            <mrow>
                                                <mi>A</mi>
                                                <mi>r</mi>
                                                <mi>e</mi>
                                                <mi>a</mi>
                                                <mtext>&#xA0;</mtext>
                                                <mi>o</mi>
                                                <mi>f</mi>
                                                <mtext>&#xA0;</mtext>
                                                <mo>&#x25B3;</mo>
                                                <mi>Q</mi>
                                                <mi>C</mi>
                                                <mi>P</mi>
                                            </mrow>
                                        </mfrac>
                                        <mo>=</mo>
                                        <mfrac>
                                            <mrow>
                                                <mfrac>
                                                    <mn>1</mn>
                                                    <mn>2</mn>
                                                </mfrac>
                                                <mo>&#xD7;</mo>
                                                <mi>A</mi>
                                                <mi>Q</mi>
                                                <mo>&#xD7;</mo>
                                                <mi>P</mi>
                                                <mi>M</mi>
                                            </mrow>
                                            <mrow>
                                                <mfrac>
                                                    <mn>1</mn>
                                                    <mn>2</mn>
                                                </mfrac>
                                                <mo>&#xD7;</mo>
                                                <mi>Q</mi>
                                                <mi>C</mi>
                                                <mo>&#xD7;</mo>
                                                <mi>P</mi>
                                                <mi>M</mi>
                                            </mrow>
                                        </mfrac>
                                        <mo>=</mo>
                                        <mfrac>
                                            <mrow>
                                                <mi>A</mi>
                                                <mi>Q</mi>
                                            </mrow>
                                            <mrow>
                                                <mi>Q</mi>
                                                <mi>C</mi>
                                            </mrow>
                                        </mfrac>
                                        <mo>&#x2026;</mo>
                                        <mo stretchy="false">(</mo>
                                        <mn>2</mn>
                                        <mo stretchy="false">)</mo>
                                    </mtd>
                                </mtr>
                            </mtable>
                        </math>
                    </div>
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        <div>According to the property of triangles, the triangles drawn between the same parallel lines and on the same base have equal areas.</div>
                        <div>Therefore, we can say that ∆PBQ and QCP have the same area.</div>
                        <div className='theory-equations'>Area of ∆PBQ = Area of ∆QCP …………..(3)</div>
                        <div>Therefore, from the equations (1), (2) and (3) we can say that,</div>
                        <div>AP/PB = AQ/QC</div>
                        <div>Also, ∆ABC and ∆APQ fulfil the conditions for similar triangles, as stated above. Thus, we can say that ∆ABC ~∆APQ.</div>
                    </div>
                </div>
            </div>
            <div className="theory-card">
                <div className="theory-head-container">
                    The MidPoint Theorem
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        <div>The MidPoint theorem is a special case of the basic proportionality theorem.</div>
                        <div>According to mid-point theorem, a line drawn joining the midpoints of the two sides of a triangle is parallel to the third side.</div>
                        <div>Consider an ∆ABC,</div>
                    </div>
                </div>
                <div className="theory-image">
                    <img src={Image3} alt="Midpoint Theorem" />
                </div>
                <div className="theory-body-container theory-headings">
                    <div className="theory-body">
                        Conclusion
                    </div>
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        <div>We arrive at the following conclusions from the above theorem:</div>
                        <div>If P and Q are the mid-points of AB and AC, then PQ || BC. We can state this mathematically as follows:</div>
                        <div> If P and Q are points on AB and AC such that AP = PB = 1/2 (AB) and AQ = QC = 1/2 (AC), then PQ || BC.</div>
                        <div>Also, the converse of mid-point theorem is also true which states that the line drawn through the mid-point of a side of a triangle which is parallel to another side, bisects the third side of the triangle.</div>
                        <div>Hence, the basic proportionality theorem is proved.</div>
                    </div>
                </div>
            </div>
            <div className="theory-card">
                <div className="theory-head-container">
                    Converse of Basic Proportionality Theorem
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        According to this theorem, if a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.
                    </div>
                </div>
                <div className="theory-image">
                    <img src={Image4} alt="Converse of Basic Proportionality Theorem" />
                </div>
                <div className="theory-body-container theory-headings">
                    <div className="theory-body">
                        Proof
                    </div>
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        <div>Suppose a line DE, intersects the two sides of a triangle AB and AC at D and E, such that:</div>
                        <div className='theory-equations'>AD/DB = AE/EC ……(1)</div>
                        <div>Assume DE is not parallel to BC. Now, draw a line DE’ parallel to BC.</div>
                        <div>Hence, by similar triangles,</div>
                        <div className='theory-equations'>AD/DB = AE’/E’C ……(2)</div>
                        <div>From eq. 1 and 2, we get:</div>
                        <div>AE/EC = AE’/E’C</div>
                        <div>Adding 1 on both the sides:</div>
                        <div>AE/EC + 1 = AE’/E’C +1</div>
                        <div>(AE +EC)/EC = (AE’+E’C)/E’C</div>
                        <div>AC/EC = AC/E’C</div>
                        <div>So,</div>
                        <div className='theory-equations'>EC = E’C</div>
                        <div>This is possible only when E and E’ coincide.</div>
                        <div>But, DE’ || BC</div>
                        <div>Therefore, DE ||BC.</div>
                        <div>Hence, proved.</div>
                    </div>
                </div>
            </div>
            <div className="theory-card">
                <div className="theory-head-container">
                    Solved Examples
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        1) In a ∆ABC, sides AB and AC  are intersected by a line at D and E respectively, which is parallel to side BC. Then prove that AD/AB = AE/AC.
                    </div>
                </div>
                <div className="theory-image">
                    <img src={Image5} alt="Example-1" />
                </div>
                <div className="theory-body-container theory-headings">
                    <div className="theory-body">
                        Solution
                    </div>
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        <div>Given,</div>
                        <div>DE || BC</div>
                        <div>So, AD/DB = AE/EC</div>
                        <div>or we can interchange the ratios as:</div>
                        <div>DB/AD = EC/AE</div>
                        <div>Now, add 1 on both sides:</div>
                        <div>(DB/AD)  + 1 = (EC/AE) + 1</div>
                        <div>(DB + AD)/AD = (EC + AE)/AE</div>
                        <div>AB/AD = AC/ AE</div>
                        <div>If we interchange the ratios again, we get:</div>
                        <div>AD/AB = AE/AC</div>
                        <div>Hence, proved.</div>
                    </div>
                </div>
                <div className="theory-body-container" id='solved-2'>
                    <div className="theory-body">
                        2) Suppose a triangle ABC, where DE is a line drawn from the midpoint of AB and ends midpoint of AC at E. AD/DB = AE/EC and ∠ADE = ∠ACB. Then prove ABC is an isosceles triangle.
                    </div>
                </div>
                <div className="theory-body-container theory-headings">
                    <div className="theory-body">
                        Solution
                    </div>
                </div>
                <div className="theory-body-container">
                    <div className="theory-body">
                        <div>Given,</div>
                        <div>AD/DB = AE/EC</div>
                        <div>By the converse of basic proportionality theorem, we get:</div>
                        <div>DE || BC</div>
                        <div>But it is given that,</div>
                        <div>∠ADE = ∠ACB</div>
                        <div>Hence,</div>
                        <div>∠ABC = ∠ACB</div>
                        <div>The side opposite to equal angles is also equal.</div>
                        <div>AB = AC</div>
                        <div>Hence, ABC is an isosceles triangle.</div>
                    </div>
                </div>
            </div>
            <div className="theory-btn">
                <button><Link to='/sim'>START SIMULATION</Link></button>
            </div>
        </>
    )
}

export default Theory
