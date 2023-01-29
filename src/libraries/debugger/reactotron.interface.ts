import {ClientOptions} from 'reactotron-core-client/dist/types/client-options';
// eslint-disable-next-line import/no-cycle
import {reactotronInstance} from './reactotron';

declare global {
  interface Console {
    // eslint-disable-next-line no-undef
    tron: typeof reactotronInstance;
  }
}

export interface ReactotronCore {
  startTimer: () => () => number;
  close: () => void;
  send: (type: any, payload: any, important: boolean) => void;
  display: (config: any) => void;
  reportError: (this: any, error: any) => void;
  onCustomCommand: (config: string, optHandler: () => void) => () => void;
  apiResponse: (request: any, response: any, duration: any) => void;
  benchmark: (title: string) => {
    step: (stepName: string) => void;
    stop: (stopTitle: string) => void;
    last: (stopTitle: string) => void;
  };
  clear: () => void;
  image: (options: {
    uri: any;
    preview: any;
    filename: any;
    width: any;
    height: any;
    caption: any;
  }) => void;
  log: (...args: any[]) => void;
  logImportant: (...args: any[]) => void;
  debug: (message: any, important: boolean) => void;
  warn: (message: any) => void;
  error: (message: any, stack: any) => void;
  stateActionComplete: (name: any, action: any, important: boolean) => void;
  stateValuesResponse: (path: any, value: any, valid: boolean) => void;
  stateKeysResponse: (path: any, keys: any, valid: boolean) => void;
  stateValuesChange: (changes: any) => void;
  stateBackupResponse: (state: any) => void;
  repl: (name: string, value: object | Function | string | number) => void;
}

export interface Reactotron<ReactotronSubtype = ReactotronCore> extends ReactotronCore {
  /**
   * Set the configuration options.
   */
  configure: (options?: ClientOptions) => Reactotron<ReactotronSubtype> & ReactotronSubtype;
  use: (
    pluginCreator?: (client: Reactotron<ReactotronSubtype> & ReactotronSubtype) => any
  ) => Reactotron<ReactotronSubtype> & ReactotronSubtype;
  connect: () => Reactotron<ReactotronSubtype> & ReactotronSubtype;
}
