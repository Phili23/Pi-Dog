import React,{useState, useEffect} from 'react'
import{Link, useHistory} from 'react-router-dom'
import {postDogs, getTemperaments} from '../actions/index'
import { useDispatch, useSelector} from 'react-redux'