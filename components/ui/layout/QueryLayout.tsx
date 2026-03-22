"use client";
import React from "react";
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { store, persistor } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

function makeQuery() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        staleTime: 60 * 1000,
      },
    },
  });
}

let browseClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQuery();
  } else {
    if (!browseClient) browseClient = makeQuery();
  }

  return browseClient;
}

export default function QueryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
