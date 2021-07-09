#!/usr/bin/env python

# WS server example

import asyncio
import websockets
import json
import logging
import random
import datetime

emotions = ['Happiness', 'Sadness', 'Fear','Disgust','Angry','Neutral','Surprise'];

async def emotion(websocket, path):
	current_emotion = random.choice(emotions)
	print(current_emotion)
	await websocket.send(current_emotion)
	async for message in websocket:
		print(message)

async def main():
	async with websockets.serve(emotion, "localhost", 5678):
		await asyncio.Future()  # run forever


if __name__ == "__main__":
	asyncio.run(main())
