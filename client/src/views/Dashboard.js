import React, { Children, useContext, useEffect, useState } from 'react';

import styled from '../css/ViewsCSS/Dashboard.module.css';

import UserContext from '../context/UserContext';

import Child from '../components/familyRelations/Child';
import Kids from '../components/familyRelations/Kids';
import Parent from '../components/familyRelations/Parent';
import Sibling from '../components/familyRelations/Sibling';
import Spouse from '../components/familyRelations/Spouse';
import StepParent from '../components/familyRelations/StepParent';

const Dashboard = (props) => {
    const { user, spouseIDs,siblingIds,parentsIds,stepParentsIds,kidsIds,stepKidsIds,stepSiblingIds } = useContext(UserContext)

    return(
        <div className="smallContainer">
            <h1>Welcome Back <span> {user.firstName} </span>!</h1> 
            <h3 className={styled.subtitle}>Your excuess for missing birthdays is now over. Wan Wan Wan</h3>
            
            {/* Spouse */}
            {
                spouseIDs.length === 0 ? "" : <>
                    <div className={styled.spouseWrp}>
                        <h2 className={styled.dashTitle}>Congrats! You're married too...</h2>
                        {
                            spouseIDs.map((item,i) => {
                                return <Spouse key={i} id={item} />
                            })
                        }
                    </div> 
                </> 
            } 

            {/* ============== Children ============== */}
            {
                kidsIds.length >= 1 ? <h2 className={styled.kidsTitle}>What's this...Children?! </h2> : ""
            }
            
            {/* Minor Kids */}
            <Kids />
            {
                kidsIds.length === 0 ? "" : <>
                    {
                        kidsIds.map((item,i) => {
                            return <Child key={i} id={item}/>
                        })
                    }
                </> 
            }

            {/* Kids */}
            {
                stepKidsIds.length >= 1 ? <h3 className={styled.kidsTitle}>Step Kids</h3> : ""
            }

            {/* Step/Half Kids */}
            {
                stepKidsIds.length === 0 ? "" : <>
                    {
                        stepKidsIds.map((item,i) => {
                            return <Child key={i} id={item}/>
                        })
                    }
                </> 
            }
            
            {/* ============== Parents ============== */}
            {
                parentsIds.length === 0 ? "" : <>
                    <div className={styled.parents}>
                        <h2 className={styled.dashTitle}>Meet the Parents</h2>
                        {
                            parentsIds.map((item,i) => {
                                return <Parent key={i} id={item} />
                            })
                        }
                    </div> 
                </> 
            }
            {/* StepParents */}
            {
                stepParentsIds.length === 0 ? "" : <>
                    <div className={styled.parents}>
                        <h3>Step Parent(s)</h3>
                        {
                            stepParentsIds.map((item,i) => {
                                return <StepParent key={i} id={item} wrapper="indent" />
                            })
                        }
                    </div> 
                </> 
            }

            {/* ============== sibling ============== */}
            {
                siblingIds.length === 0 ? "" : <>
                    <div className={styled.sibling}>
                        <h2 className={styled.dashTitle}>Siblings</h2>
                        {
                            siblingIds.map((item,i) => {
                                return <Sibling key={i} id={item} />
                            })
                        }
                    </div> 
                </> 
            }

            {/* step/half sibling */}
            {
                stepSiblingIds.length === 0 ? "" : <>
                    <div className={styled.sibling}>
                        <h3 className={styled.dashTitle}>Step/Half Siblings</h3>
                        {
                            stepSiblingIds.map((item,i) => {
                                return <Spouse key={i} id={item} wrapper="indent" />
                            })
                        }
                    </div> 
                </> 
            }
        </div>
    )
}

export default Dashboard;