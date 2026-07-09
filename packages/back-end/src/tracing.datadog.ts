import "./init/aliases";
import { Attributes, setMetrics } from "./util/metrics";

class Counter {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  increment(attributes?: Attributes) {
    // No-op: Datadog is disabled
  }

  decrement(attributes?: Attributes) {
    // No-op: Datadog is disabled
  }
}

class Histogram {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  record(v: number, attributes?: Attributes) {
    // No-op: Datadog is disabled
  }
}

class Gauge {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  record(v: number, attributes?: Attributes) {
    // No-op: Datadog is disabled
  }
}

setMetrics({
  getCounter: (name: string) => new Counter(name),
  getHistogram: (name: string) => new Histogram(name),
  getGauge: (name: string) => new Gauge(name),
});

