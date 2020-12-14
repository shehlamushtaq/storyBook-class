import React, { Component } from 'react'
import List from './List'

export default {
    title:"List of Works",
    component:List
}

export const l1 = () => <List data={[{work:"Go Home",id:1},{work:"Go School",id:2}]}/>