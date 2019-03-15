import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";
import LinearProgress from "@material-ui/core/es/LinearProgress/LinearProgress";
import { Check, CloudUpload } from "@material-ui/icons/";
import React from "react";
import { FileManager, FileUploader } from "reactjs-file-uploader";
import ImagePreview from "./ImagePreview";
import ImageProgress from "./ImageProgress";
import ImageResponse from "./ImageResponse";
import SelectFileButton from "./SelectFileButton";

const CLOUD_NAME = "dpdenton";
const CLOUD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
const styles = {
	containerStyle: {
		// border: "thin solid rgb(221, 221, 221)",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center"
	},
	controlsStyle: {
		padding: 25,
		backgroundColor: "transparent",
		textAlign: "center"
	},
	controlStyle: {
		margin: 10
	},
	fileStyle: {
		width: "100%",
		height: "100%",
		border: "thin solid #eee",
		borderRadius: 10,
		overflow: "hidden",
		cursor: "pointer"
	},
	wrapperStyle: {
		position: "relative"
	},

	buttonStyle: {
		position: "absolute",
		width: 44,
		height: 44,
		right: 16,
		bottom: 16
	},

	progressStyle: {
		position: "absolute",
		width: 52,
		height: 52,
		bottom: 12,
		right: 12,
		zIndex: 1,
		color: "white"
	}
};

class ImageUploadDemo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			files: [],
			events: {},
			progress: {},
			selectedIndex: null
		};

		this.uploadFile = this.uploadFile.bind(this);
	}

	render() {
		const { question } = this.props;
		const totalProgress = Object.values(this.state.progress).reduce(
			(a, b) => a + b,
			0
		);
		const progress =
			(totalProgress / Object.keys(this.state.progress).length) * 100 || 0;

		return (
			<div>
				<LinearProgress
					variant={progress < 100 ? "determinate" : "indeterminate"}
					value={progress}
				/>

				<div style={styles.controlsStyle}>
					<div>
						<h4>{question}</h4>
						<SelectFileButton
							multiple={false}
							onChange={event => {
								this.setState({
									files: this.state.files.concat(Array.from(event.target.files))
								});
							}}
							button={
								<Button
									variant="contained"
									size="large"
									color="primary"
									style={styles.controlStyle}
								>
									Select Image
									<CloudUpload style={{ marginLeft: 5 }} />
								</Button>
							}
						/>
					</div>
				</div>

				<FileManager files={this.state.files}>
					{files => (
						<div style={styles.containerStyle}>
							{files.map(this.uploadFile)}
						</div>
					)}
				</FileManager>
			</div>
		);
	}

	uploadFile(file) {
		return (
			<FileUploader
				key={file.key}
				file={file}
				readFile
				url={CLOUD_URL}
				autoUpload={true}
				formData={{
					file,
					upload_preset: "public",
					tags: "demo_upload"
				}}
				onUploadReady={event => {
					const { progress } = this.state;
					progress[file.key] = 0;
					this.setState({ progress, selectedIndex: file.key });
					this.addTransitionState(event, FileUploader.UPLOAD_READY, file.key);
				}}
				onUploadStart={event => {
					this.addTransitionState(event, FileUploader.UPLOAD_START, file.key);
				}}
				onUploadProgress={event => {
					const { progress } = this.state;
					progress[file.key] = event.total ? event.loaded / event.total : 0;
					this.setState({ progress });
					this.addTransitionState(
						event,
						FileUploader.UPLOAD_PROGRESS,
						file.key
					);
				}}
				onUploadComplete={event => {
					this.addTransitionState(
						event,
						FileUploader.UPLOAD_COMPLETE,
						file.key
					);
				}}
				onDownloadStart={event => {
					this.addTransitionState(event, FileUploader.DOWNLOAD_START, file.key);
				}}
				onDownloadProgress={event => {
					this.addTransitionState(
						event,
						FileUploader.DOWNLOAD_PROGRESS,
						file.key
					);
				}}
				onDownloadComplete={event => {
					const { progress } = this.state;
					delete progress[file.key];
					this.setState({ progress });
					this.addTransitionState(
						event,
						FileUploader.DOWNLOAD_COMPLETE,
						file.key
					);
				}}
			>
				{data => {
					const fileContainerStyle = {
						width: 150,
						height: 150,
						margin: 25
					};

					return (
						<div
							style={fileContainerStyle}
							onClick={() => {
								this.setState({ selectedIndex: file.key });
							}}
						>
							<div style={styles.fileStyle}>
								{ImageUploadDemo.renderImage(data)}
							</div>
							<div>{ImageUploadDemo.renderButton(data)}</div>
						</div>
					);
				}}
			</FileUploader>
		);
	}

	static renderButton(data) {
		switch (data.requestState) {
			case FileUploader.UPLOAD_READY:
				return (
					<div style={styles.wrapperStyle}>
						<Button
							style={styles.buttonStyle}
							variant="fab"
							color="primary"
							onClick={data.startUpload}
						>
							<CloudUpload />
						</Button>
					</div>
				);

			case FileUploader.ABORT:
			case FileUploader.UPLOAD_START:
			case FileUploader.UPLOAD_PROGRESS: {
				const progress = data.uploadProgress
					? Math.floor(
							(data.uploadProgress.loaded / data.uploadProgress.total) * 100
					  )
					: 0;

				return (
					<div style={styles.wrapperStyle}>
						<Button
							style={styles.buttonStyle}
							variant="fab"
							color="primary"
							onClick={data.startUpload}
						>
							{progress || 0}
						</Button>
						<CircularProgress style={styles.progressStyle} size={35} />
					</div>
				);
			}

			case FileUploader.UPLOAD_COMPLETE:
			case FileUploader.DOWNLOAD_PROGRESS:
			case FileUploader.DOWNLOAD_COMPLETE:
				return (
					<div style={styles.wrapperStyle}>
						<Button
							style={styles.buttonStyle}
							variant="fab"
							onClick={data.startUpload}
						>
							<Check />
						</Button>
					</div>
				);

			case FileUploader.ERROR:
				return <p>Error</p>;

			default:
				return <p>Something has gone wrong!</p>;
		}
	}

	static renderImage(data) {
		switch (data.requestState) {
			case FileUploader.UPLOAD_READY:
				return <ImagePreview src={data.fileData || ""} />;

			case FileUploader.UPLOAD_START:
			case FileUploader.UPLOAD_PROGRESS:
			case FileUploader.UPLOAD_COMPLETE:
			case FileUploader.ABORT: {
				const progress = data.uploadProgress
					? Math.floor(
							(data.uploadProgress.loaded / data.uploadProgress.total) * 100
					  )
					: 0;

				return (
					<ImageProgress
						src={data.fileData}
						progress={progress}
						completed={progress === 100}
					/>
				);
			}

			case FileUploader.DOWNLOAD_PROGRESS:
			case FileUploader.DOWNLOAD_COMPLETE:
				return (
					<ImageResponse
						cloudName={CLOUD_NAME}
						publicId={data.response.public_id}
						crop="fill"
						width={180}
						height={180}
						quality={100}
						flags={["progressive"]}
					/>
				);
			default:
				return <p>Something has gone wrong!</p>;
		}
	}

	addTransitionState(event, eventName, index) {
		const { events } = this.state;

		const eventState = {
			eventName,
			eventObject: event,
			eventTimestamp: +new Date()
		};

		if (!events[index]) {
			events[index] = [eventState];
		} else {
			events[index].push(eventState);
		}

		this.setState({ events });
	}
}

export default ImageUploadDemo;
