
describe('[c003] - how to test Outer dependencies? (snakeGame)', () => {

	describe('snakeGame', () => {

		function snakeGame(snakeService: {start(point: [number, number]): void}, musicService: {play(): void}) {
			console.log('Welcome to Snake Game !')
			snakeService.start([10, 20]);
			musicService.play();
		}

		it('should start snake and play music when called', () => {
			const mockSnakeService = {
				start: vi.fn()
			};
			const mockMusicService = {
				play: vi.fn()
			};

			snakeGame(mockSnakeService, mockMusicService);

			expect(mockMusicService.play).toHaveBeenCalled();
			expect(mockSnakeService.start).toHaveBeenCalled();
		})

		it('should start the snake form same position [10, 20] each time game called', () => {
			const mockSnakeService = {
				start: vi.fn()
			};
			const fakeMusicService = { play() {} };

			snakeGame(mockSnakeService, fakeMusicService);
			snakeGame(mockSnakeService, fakeMusicService);
			snakeGame(mockSnakeService, fakeMusicService);

			expect(mockSnakeService.start).toHaveBeenNthCalledWith(1, [10, 20]);
			expect(mockSnakeService.start).toHaveBeenNthCalledWith(2, [10, 20]);
			expect(mockSnakeService.start).toHaveBeenNthCalledWith(3, [10, 20]);
		})
	})
})
