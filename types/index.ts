declare global {
    interface Window {
      ethereum?: {
        isMetaMask?: boolean;
        request?: (args: any) => Promise<any>;
        on?: (eventName: string, callback: (event: any) => void) => void;
        removeListener?: (eventName: string, callback: (event: any) => void) => void;
      };
    }
  }