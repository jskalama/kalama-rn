import { DocumentDirectoryPath, downloadFile, ExternalStorageDirectoryPath } from 'react-native-fs';
import { takeEvery, call } from 'redux-saga/effects';
import { PermissionsAndroid } from 'react-native';

// type DownloadFileOptions = {
//     fromUrl: string;          // URL to download file from
//     toFile: string;           // Local filesystem path to save the file to
//     headers?: Headers;        // An object of headers to be passed to the server
//     background?: boolean;     // Continue the download in the background after the app terminates (iOS only)
//     discretionary?: boolean;  // Allow the OS to control the timing and speed of the download to improve perceived performance  (iOS only)
//     cacheable?: boolean;      // Whether the download can be stored in the shared NSURLCache (iOS only, defaults to true)
//     progressDivider?: number;
//     begin?: (res: DownloadBeginCallbackResult) => void;
//     progress?: (res: DownloadProgressCallbackResult) => void;
//     resumable?: () => void;    // only supported on iOS yet
//     connectionTimeout?: number // only supported on Android yet
//     readTimeout?: number       // supported on Android and iOS
//   };

console.log({ ExternalStorageDirectoryPath });

async function requestPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Write',
                message: 'I want to write'
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Perms OK');
        } else {
            console.log('Perms NOT OK');
        }
    } catch (err) {
        console.log('Perms FAILED');
        console.warn(err);
        return Promise.reject(err);
    }
}

function dwnld(url, title) {
    const p = downloadFile({
        fromUrl: url,
        toFile: `${ExternalStorageDirectoryPath}/Music/${title}.mp3`
    }).promise;

    return p.then(
        a => {
            console.log('DL result:', a);
            return a;
        },
        e => {
            console.log('DL error:', e);
            return Promise.reject(e);
        }
    );
}

function* onDownloadBatchRun({ payload: { tracks } }) {
    yield call(requestPermission);

    for (const { url, title } of tracks) {
        console.log(`Downloading ${title}`);
        try {
            yield call(dwnld, url, title);
        } catch (e) {
            console.log(`Download error: ${e.stack}`);
        }
    }
}

export default function* downloadSaga() {
    yield takeEvery('Download/BATCH/RUN', onDownloadBatchRun);
}
