import React, { createContext, useState, useEffect } from 'react'
import { io } from 'socket.io-client';
import Peer from 'simple-peer'

const SocketContext = createContext();

