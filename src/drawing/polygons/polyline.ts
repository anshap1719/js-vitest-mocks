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

import { MVCObject } from "../../maps/event/mvcobject";

export class Polyline extends MVCObject implements google.maps.Polyline {
  constructor(opts?: google.maps.PolylineOptions | null) {
    super();
  }

  public getDraggable = vi.fn().mockImplementation((): boolean => false);
  public getEditable = vi.fn().mockImplementation((): boolean => false);
  public getMap = vi
    .fn()
    .mockImplementation((): google.maps.Map => ({} as google.maps.Map));
  public getPath = vi
    .fn()
    .mockImplementation(
      (): google.maps.MVCArray<google.maps.LatLng> =>
        ({} as google.maps.MVCArray<google.maps.LatLng>)
    );
  public getVisible = vi.fn().mockImplementation((): boolean => false);
  public setDraggable = vi
    .fn()
    .mockImplementation((draggable: boolean): void => {});
  public setEditable = vi
    .fn()
    .mockImplementation((editable: boolean): void => {});
  public setMap = vi
    .fn()
    .mockImplementation((map: google.maps.Map): void => {});
  public setOptions = vi
    .fn()
    .mockImplementation((options: google.maps.PolylineOptions): void => {});
  public setPath = vi
    .fn()
    .mockImplementation(
      (
        path:
          | google.maps.MVCArray<google.maps.LatLng>
          | google.maps.LatLng[]
          | google.maps.LatLngLiteral[]
      ): void => {}
    );
  public setVisible = vi
    .fn()
    .mockImplementation((visible: boolean): void => {});
}
