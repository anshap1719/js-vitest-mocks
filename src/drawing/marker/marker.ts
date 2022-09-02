/**
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { LatLng } from "../../maps/coordinates/latlng";
import { MapsEventListener } from "../../maps/event/event";
import { MVCObject } from "../../maps/event/mvcobject";

export class Marker extends MVCObject implements google.maps.Marker {
  static readonly MAX_ZINDEX: number;
  constructor(opts?: google.maps.MarkerOptions | null) {
    super();
  }
  public getAnimation = vi
    .fn()
    .mockImplementation((): Animation | null | undefined => null);
  public getClickable = vi.fn().mockImplementation((): boolean => null);
  public getCursor = vi
    .fn()
    .mockImplementation((): string | null | undefined => null);
  public getDraggable = vi
    .fn()
    .mockImplementation((): boolean | null | undefined => null);
  public getIcon = vi
    .fn()
    .mockImplementation(
      (): string | google.maps.Icon | google.maps.Symbol | null | undefined =>
        null
    );
  public getLabel = vi
    .fn()
    .mockImplementation((): google.maps.MarkerLabel | null | undefined => null);
  public getMap = vi
    .fn()
    .mockImplementation(
      (): google.maps.Map | google.maps.StreetViewPanorama | null | undefined =>
        null
    );
  public getOpacity = vi
    .fn()
    .mockImplementation((): number | null | undefined => null);
  public getPosition = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLng | null | undefined =>
        new LatLng({ lat: 0, lng: 0 })
    );
  public getShape = vi
    .fn()
    .mockImplementation((): google.maps.MarkerShape | null | undefined => null);
  public getTitle = vi
    .fn()
    .mockImplementation((): string | null | undefined => null);
  public getVisible = vi.fn().mockImplementation((): boolean => null);
  public getZIndex = vi
    .fn()
    .mockImplementation((): number | null | undefined => null);
  public setAnimation = vi
    .fn()
    .mockImplementation((animation: Animation | null): void => {});
  public setClickable = vi.fn().mockImplementation((flag: boolean): void => {});
  public setCursor = vi
    .fn()
    .mockImplementation((cursor: string | null): void => {});
  public setDraggable = vi
    .fn()
    .mockImplementation((flag: boolean | null): void => {});
  public setIcon = vi
    .fn()
    .mockImplementation(
      (icon: string | google.maps.Icon | google.maps.Symbol | null): void => {}
    );
  public setLabel = vi
    .fn()
    .mockImplementation(
      (label: string | google.maps.MarkerLabel | null): void => {}
    );
  public setMap = vi
    .fn()
    .mockImplementation(
      (map: google.maps.Map | google.maps.StreetViewPanorama | null): void => {}
    );
  public setOpacity = vi
    .fn()
    .mockImplementation((opacity: number | null): void => {});
  public setOptions = vi
    .fn()
    .mockImplementation((options: google.maps.MarkerOptions): void => {});
  public setPosition = vi
    .fn()
    .mockImplementation(
      (
        latlng: google.maps.LatLng | google.maps.LatLngLiteral | null
      ): void => {}
    );
  public setShape = vi
    .fn()
    .mockImplementation((shape: google.maps.MarkerShape | null): void => {});
  public setTitle = vi
    .fn()
    .mockImplementation((title: string | null): void => {});
  public setVisible = vi
    .fn()
    .mockImplementation((visible: boolean): void => {});
  public setZIndex = vi
    .fn()
    .mockImplementation((zIndex: number | null): void => {});
  public addListener = vi
    .fn()
    .mockImplementation(
      (
        eventName: string,
        handler: (this: Marker, event: MouseEvent) => void
      ): google.maps.MapsEventListener => MapsEventListener
    );
}
