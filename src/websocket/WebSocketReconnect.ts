import { IWebSocketReconnect, IWebSocketBean } from './websocket';

/**
 * WebSocket重连机制和重连重发数据机制
 */
export class WebSocketReconnect implements IWebSocketReconnect {
	/**
	 * 开启状态
	 */
	status: boolean;

	/**
	 * WebSocketBean对象
	 */
	websocketbean: IWebSocketBean;

	/**
	 * 当前重连次数
	 */
	num = 0;

	/**
	 * 最大重连次数
	 */
	reconnectMaxNum = 10;

	/**
	 * 重连间隔时间
	 */
	reconnectGapTime = 30000;

	/**
	 * 重连初始化梯度间隔时间
	 */
	gradientReconnectStartTime = 1000;

	/**
	 * 重连梯度最大间隔时间
	 */
	gradientReconnectMaxTime = 60000;

	/**
	 * 是否需要重连梯度
	 */
	isReconnectGradientEnabled = true;

	constructor(websocketBean: IWebSocketBean) {
		this.websocketbean = websocketBean;
		this.status = websocketBean.param.needReconnect ?? false;
		this.reconnectMaxNum = this.websocketbean.param.reconnectMaxNum ?? 10;
		this.reconnectGapTime = this.websocketbean.param.reconnectGapTime ?? 30000;
		this.gradientReconnectStartTime =
			this.websocketbean.param.gradientReconnectStartTime ?? 1000;
		this.gradientReconnectMaxTime =
			this.websocketbean.param.gradientReconnectMaxTime ?? 60000;
		this.isReconnectGradientEnabled =
			this.websocketbean.param.isReconnectGradientEnabled ?? true;
	}

	timer: number = null as any;

	/**
	 * 开始尝试重连
	 */
	start = () => {
		if (!this.status || this.reconnectMaxNum === 0) return;
		if (this.timer !== null) return;
		this.num = 0;
		if (this.websocketbean.param.onreconnect) {
			this.websocketbean.param.onreconnect();
		}
		this.scheduleReconnect();
	};

	/**
	 * 停止重连
	 */
	stop = () => {
		if (!this.status) return;
		clearInterval(this.timer);
		this.timer = null as any;
	};

	/**
	 *  执行重连
	 */
	tryReconnect = () => {
		this.websocketbean.start(undefined, true);
		this.num++;
	};

	/**
	 *  梯度重连
	 */
	scheduleReconnect = () => {
		if (this.reconnectMaxNum > 0 && this.num >= this.reconnectMaxNum) {
			if (this.websocketbean.param.onReconnectFailure) {
				this.websocketbean.param.onReconnectFailure();
			}
			this.stop();
			return;
		}

		let interval = this.reconnectGapTime;
		if (this.isReconnectGradientEnabled) {
			interval = Math.min(
				this.gradientReconnectStartTime * Math.pow(2, this.num),
				this.gradientReconnectMaxTime
			);
		}

		console.log(
			`Attempt ${this.num + 1} to reconnect, interval: ${interval} ms`
		);

		this.tryReconnect();

		this.timer = setTimeout(() => {
			this.scheduleReconnect();
		}, interval) as any;
	};
}
